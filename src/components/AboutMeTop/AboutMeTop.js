import React, { useRef, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/avatar.jpg';
import './AboutMeTop.css';
import BlobBackground from '../BlobBackground/BlobBackground';

export default function AboutMeTop() {
  const avatarRef = useRef(null);
  const sloganRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      avatarRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      sloganRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section className="about-top" id="slogan">
      <BlobBackground />
      <Container fluid="lg" className="px-4">
        <div className="about-row">
          {/* Avatar */}
          <div className="avatar-wrapper" ref={avatarRef}>
            <img src={avatar} alt="Avatar" className="avatar-img" />
          </div>

          {/* Slogan */}
          <div className="slogan-wrapper" ref={sloganRef}>
            <p className="slogan-label">My Slogan :</p>
            <p className="slogan-text">
              "My knowledge is but a grain of sand in the vast desert of discovery, with endless horizons to explore."
            </p>
            <div className="cv-buttons">
              <Button
                variant="success"
                href="https://drive.google.com/file/d/10SSComLMmNwzTjLImmQkaG8At57nhz5G/view?usp=sharing"
                target="_blank"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                Go To My CV
              </Button>
              <Button
                variant="danger"
                href="/Trần Quốc Tuấn-Intern Frontend Developer.pdf"
                download
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download My CV
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
