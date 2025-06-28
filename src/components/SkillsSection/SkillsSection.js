// src/components/SkillsSection/SkillsSection.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SkillsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <Container>
        <h2 className="text-center skills-title">Kỹ Năng</h2>
        <Row className="gy-4">
          <Col md={6}>
            <div className="skills-box">
              <h5>Kỹ năng chuyên môn</h5>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS, Redux Toolkit</li>
                <li>Bootstrap, React Bootstrap</li>
                <li>Responsive Design, Figma</li>
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <div className="skills-box">
              <h5>Kỹ năng mềm</h5>
              <ul>
                <li>Quản lý thời gian hiệu quả</li>
                <li>Thích nghi và linh hoạt</li>
                <li>Tư duy sáng tạo và phân tích</li>
                <li>Khả năng làm việc nhóm và độc lập</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
