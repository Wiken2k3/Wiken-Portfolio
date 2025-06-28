import React from 'react';
import AdvancedSkills from './AdvancedSkills';
import SoftSkills from './SoftSkills';
import BlobBackground from '../BlobBackground/BlobBackground';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <BlobBackground />
      <div className="skills-content container">
        <AdvancedSkills />
        <SoftSkills />
      </div>
    </section>
  );
}