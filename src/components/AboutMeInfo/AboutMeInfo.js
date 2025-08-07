import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import studentCard from '../../assets/student-card.png';
import './AboutMeInfo.css';
// import ThreeBG from './ThreeBG';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMeInfo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll('.fade-slide'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      el.querySelector('.student-card'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="about-bottom" id="about" ref={sectionRef}>
      {/* <ThreeBG /> */}
      <div className="about-overlay w-100">
        <Container>
          <h2 className="about-title text-center mb-5 fade-slide">ABOUT ME</h2>
          <Row>
            <Col md={8}>
              <Row>
                <Col sm={6}>
                  <p><strong>Full Name:</strong> Trần Quốc Tuấn</p>
                  <p><strong>GPA:</strong> 3.05</p>
                  <p><strong>Major:</strong> Software Engineering</p>

                  <p><strong>Target:</strong></p>
                  <ul className="fade-slide">
                    <li>Become a professional FullStack Developer</li>
                    <li>Dedicate at least 10 hours per week to study and development</li>
                    <li>Complete at least 3 real-world web projects</li>
                    <li>Develop a personal portfolio website</li>
                  </ul>

                  <p><strong>Strengths:</strong></p>
                  <ul className="fade-slide">
                    <li>Quick Learner</li>
                    <li>Team Collaboration</li>
                    <li>Strong Logical Thinking</li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <p><strong>Year of birth:</strong> 2003</p>
                  <p><strong>Study In:</strong> Văn Lang University</p>

                  <p><strong>Hobbies:</strong></p>
                  <ul className="fade-slide">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Exploring New Tech</li>
                  </ul>

                  <p><strong>Languages:</strong></p>
                  <ul className="fade-slide">
                    <li>Vietnamese (native)</li>
                    <li>English</li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col md={4} className="text-center fade-slide">
              <img src={studentCard} alt="Student Card" className="student-card" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
