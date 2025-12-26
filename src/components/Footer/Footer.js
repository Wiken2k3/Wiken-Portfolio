import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-content">
        <div className="footer-top">
          <Row>
            {/* Brand Section */}
            <Col lg={4} md={12} className="mb-4 mb-lg-0">
              <div className="footer-logo-wrapper">
                <NavLink to="/" className="footer-logo">
                  <img src={logo} alt="Logo" className="footer-avatar" />
                  <h4 className="footer-brand">Quốc Tuấn</h4>
                </NavLink>
                <p className="footer-desc">
                  Một Lập trình viên Frontend đầy nhiệt huyết, tập trung vào việc xây dựng các ứng dụng web đẹp,
                  có chức năng và lấy người dùng làm trung tâm.
                </p>
              </div>
            </Col>

            {/* Quick Links Section */}
            <Col lg={2} md={6} className="footer-col">
              <h5>Liên kết</h5>
              <ul className="footer-links">
                <li><NavLink to="/">Trang chủ</NavLink></li>
                <li><NavLink to="/about">Về tôi</NavLink></li>
                <li><NavLink to="/skills">Kỹ năng</NavLink></li>
                <li><NavLink to="/projects">Dự án</NavLink></li>
                <li><NavLink to="/contact">Liên hệ</NavLink></li>
              </ul>
            </Col>

            {/* Contact Section */}
            <Col lg={3} md={6} className="footer-col">
              <h5>Liên hệ</h5>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <span>(+84) 0989 648 691</span>
                </div>
                <div className="footer-contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <a href="mailto:Wiken2k3@gmail.com" className="footer-mail">
                    Wiken2k3@gmail.com
                  </a>
                </div>
              </div>
            </Col>

            {/* Social Media Section */}
            <Col lg={3} md={12} className="footer-col">
              <h5>Theo dõi tôi</h5>
              <div className="social-icons">
                <a href="https://github.com/Wiken2k3" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/wiken2k3/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/Wiken2k3/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </Col>
          </Row>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Trần Quốc Tuấn. Đã đăng ký Bản quyền.
          </p>
        </div>
      </Container>
    </footer>
  );
}