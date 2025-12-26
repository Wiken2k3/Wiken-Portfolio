import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import studentCard from '../../assets/student-card.png';
import './AboutMeInfo.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMeInfo() {
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show content immediately without waiting for scroll
  useEffect(() => {
    // Make content visible immediately
    setIsVisible(true);
  }, []);

  // Preload student card image immediately
  useEffect(() => {
    const img = new Image();
    img.src = studentCard;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  // Handle student card image load
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Simplified animation - only animate on scroll, content visible by default
  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;
    
    // Make content visible immediately
    const elements = el.querySelectorAll('.fade-slide');
    elements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });

    const studentCardEl = el.querySelector('.student-card');
    if (studentCardEl) {
      studentCardEl.style.opacity = '1';
      studentCardEl.style.transform = 'scale(1)';
    }

    // Optional: Add subtle scroll animation for enhancement
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
          });
          
          if (studentCardEl) {
            gsap.to(studentCardEl, {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="about-bottom" id="about" ref={sectionRef}>
      <div className="about-overlay w-100">
        <Container>
          <h2 className="about-title text-center mb-5 fade-slide">ABOUT ME</h2>
          <Row>
            <Col md={8}>
              <Row>
                <Col sm={6}>
                  <div className="fade-slide">
                    <p><strong>Full Name:</strong> Trần Quốc Tuấn</p>
                    <p><strong>GPA:</strong> 2.98</p>
                    <p><strong>Major:</strong> Software Engineering</p>

                    <p><strong>Target:</strong></p>
                    <ul>
                      <li>Become a professional FullStack Developer</li>
                      <li>Dedicate at least 10 hours per week to study and development</li>
                      <li>Complete at least 3 real-world web projects</li>
                      <li>Develop a personal portfolio website</li>
                    </ul>

                    <p><strong>Strengths:</strong></p>
                    <ul>
                      <li>Quick Learner</li>
                      <li>Team Collaboration</li>
                      <li>Strong Logical Thinking</li>
                    </ul>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="fade-slide">
                    <p><strong>Year of birth:</strong> 2003</p>
                    <p><strong>Study In:</strong> Văn Lang University</p>

                    <p><strong>Hobbies:</strong></p>
                    <ul>
                      <li>Web Development</li>
                      <li>UI/UX Design</li>
                      <li>Exploring New Tech</li>
                    </ul>

                    <p><strong>Languages:</strong></p>
                    <ul>
                      <li>Vietnamese (native)</li>
                      <li>English</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={4} className="text-center fade-slide">
              <div className="image-container">
                {/* Show image immediately, fallback to placeholder if needed */}
                <img 
                  src={studentCard} 
                  alt="Student Card" 
                  className="student-card loaded"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{
                    opacity: 1,
                    display: 'block'
                  }}
                />
                {/* Only show loading if image fails */}
                {imageError && (
                  <div className="error-placeholder" style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: '200px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    color: '#fee440'
                  }}>
                    Student Card
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}