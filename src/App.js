// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutMeTop from './components/AboutMeTop/AboutMeTop';
import AboutMeInfo from './components/AboutMeInfo/AboutMeInfo';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <>
              <AboutMeTop />
              <AboutMeInfo />
              <Skills />
              <ProjectsSection />
              <ContactSection />
            </>
          }
        />
        {/* Về tôi */}
        <Route
          path="/about"
          element={
            <>
              <AboutMeTop />
              <AboutMeInfo />
            </>
          }
        />
        {/* Kỹ năng */}
        <Route
          path="/skills"
          element={
            <Skills />
          }
        />
        {/* Dự án */}
        <Route
          path="/projects"
          element={
            <ProjectsSection />
          }
        />
        {/* Liên hệ */}
        <Route
          path="/contact"
          element={
            <ContactSection />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;