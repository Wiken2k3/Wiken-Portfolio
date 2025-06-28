// src/components/Footer/Footer.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import logo from '../../assets/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <Container>
        <Row className="footer-row">
          {/* Cột 1: Logo + mô tả */}
          <Col md={3} className="footer-col">
            <a href="/" className="footer-logo d-flex align-items-center">
              <img src={logo} alt="Logo" className="footer-avatar" />
              <h4 className="footer-brand">WIKEN</h4>
            </a>
            <p className="footer-desc">Frontend Developer Portfolio</p>
            <p>Hiển thị các dự án và kỹ năng cá nhân.</p>
          </Col>

          {/* Cột 2: Liên kết */}
          <Col md={3} className="footer-col">
            <h5>LIÊN KẾT</h5>
            <ul className="footer-links">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/about">Về tôi</a></li>
              <li><a href="/projects">Dự án</a></li>
              <li><a href="/contact">Liên hệ</a></li>
            </ul>
          </Col>

          {/* Cột 3: Liên hệ */}
          <Col md={3} className="footer-col">
            <h5>LIÊN HỆ</h5>
            <p> <strong>Email:</strong>{' '}
            <a href="mailto:Wiken2k3@gmail.com?subject=Liên hệ từ Portfolio&body=."
              className="footer-mail">
              Wiken2k3@gmail.com</a>
          </p>
            <p><strong>Phone:</strong> 0989 648 691</p>
            <p><strong>Địa chỉ:</strong> TP.HCM, Việt Nam</p>
          </Col>

          {/* Cột 4: Mạng xã hội */}
          <Col md={3} className="footer-col">
            <h5>THEO DÕI TÔI</h5>
            <ul className="footer-links">
              <li><a href="https://github.com/Wiken2k3" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/wiken2k3/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/Wiken2k3" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom text-center">
           {new Date().getFullYear()} WIKEN. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
