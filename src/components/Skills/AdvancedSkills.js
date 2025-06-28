import React from 'react';
import { Container } from 'react-bootstrap';
import './AdvancedSkills.css';

import htmlLogo from '../../assets/skills/html.png';
import cssLogo from '../../assets/skills/css.png';
import jsLogo from '../../assets/skills/js.png';
import reactLogo from '../../assets/skills/react.png';
import pythonLogo from '../../assets/skills/python.png';
import figmaLogo from '../../assets/skills/figma.png';
import gitLogo from '../../assets/skills/git.png';
import mysqlLogo from '../../assets/skills/mysql.png';
import MongoDB from '../../assets/skills/mongodb.png';
import Postman from '../../assets/skills/postman.png';
import Devops from '../../assets/skills/devops.png';
import Boostrap from '../../assets/skills/boostrap.png';
import NextJS from '../../assets/skills/nextjs.png';


const frontendSkills = [
  { src: pythonLogo, alt: "Python" },
  { src: htmlLogo, alt: "HTML" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: reactLogo, alt: "ReactJS" },
  { src: NextJS, alt: "Next.js" },
  { src: Boostrap, alt: "Bootstrap 5" },
];

const otherSkills = [
  { src: figmaLogo, alt: "Figma" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: MongoDB, alt: "MongoDB" },
  { src: Postman, alt: "Postman" },
  { src: gitLogo, alt: "Git" },
  { src: Devops, alt: "DevOps" },
];

export default function AdvancedSkills() {
  return (
    <section className="advanced-skills">
      <Container>
        <h2 className="skills-title">ADVANCED SKILLS</h2>

        <h4 className="skills-subtitle">Languages & Frameworks</h4>
        <div className="skills-grid">
          {frontendSkills.map((logo, idx) => (
            <div key={idx} className="skill-item">
              <img src={logo.src} alt={logo.alt} className="skill-logo" />
              <p>{logo.alt}</p>
            </div>
          ))}
        </div>

        <h4 className="skills-subtitle">Other Tools</h4>
        <div className="skills-grid">
          {otherSkills.map((logo, idx) => (
            <div key={idx} className="skill-item">
              <img src={logo.src} alt={logo.alt} className="skill-logo" />
              <p>{logo.alt}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
