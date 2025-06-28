import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './MyNavbar.css';
import logo from '../../assets/logo.png';

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      className="custom-navbar shadow-sm"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" className="navbar-avatar" />
          {/* <span className="brand-name">WikenDev</span> */}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="nav-items mx-auto">
            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/about">Về tôi</Nav.Link>
            <Nav.Link as={Link} to="/skills">Kỹ năng</Nav.Link>
            <Nav.Link as={Link} to="/projects">Dự án</Nav.Link>
            <Nav.Link as={Link} to="/contact">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
