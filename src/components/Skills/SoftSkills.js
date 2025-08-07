// src/components/Skills/SoftSkills.js
import React from 'react';
import Slider from 'react-slick';
import './SoftSkills.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import explore1 from '../../assets/soft/amazon1.jpg';
import explore2 from '../../assets/soft/amazon2.jpg';
import explore3 from '../../assets/soft/amazon3.jpg';
import explore4 from '../../assets/soft/amazon4.png';
import explore5 from '../../assets/soft/fsoft.jpg';
import explore6 from '../../assets/soft/fsoft1.jpg';
import explore7 from '../../assets/soft/fsoft2.jpg';
import explore8 from '../../assets/soft/fsoft3.png';




import team1 from '../../assets/soft/group1.jpg';
import team2 from '../../assets/soft/group2.jpg';
import team3 from '../../assets/soft/group3.jpg';
import team4 from '../../assets/soft/group4.png';
import team5 from '../../assets/soft/group5.jpg';
import team6 from '../../assets/soft/group6.png';
import team7 from '../../assets/soft/group7.png';
import team8 from '../../assets/soft/group8.png';
import team9 from '../../assets/soft/group9.png';


import present from '../../assets/soft/class.png';
import present2 from '../../assets/soft/fpt.png';
import present1 from '../../assets/soft/present1.jpg';



export default function SoftSkills() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700, // tăng nhẹ thời gian chuyển
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: 'ease-in-out',
  };
  return (
      <section className="soft-skills-section">
    <h2 className="text-center text-white mb-4">SOFT SKILLS</h2>

    
    <div className="soft-skills-inner">
      <div className="skill-block">
        <h5 className="text-white">Kỹ năng trình bày quan điểm rõ ràng</h5>
        <Slider {...sliderSettings} className="soft-skill-slider">
          {[present, present2, present1].map((img, idx) => (
            <div key={idx} className="slider-item">
              <img src={img} alt={`team-${idx}`} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="skill-block">
        <h5 className="text-white">Khám phá và nghiên cứu công nghệ mới</h5>
        <Slider {...sliderSettings} className="soft-skill-slider">
          {[explore1, explore5, explore2, explore3, explore4,  explore6, explore7, explore8].map((img, idx) => (
            <div key={idx} className="slider-item">
              <img src={img} alt={`explore-${idx}`} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="skill-block">
        <h5 className="text-white">Thích ứng và linh hoạt với công việc nhóm</h5>
        <Slider {...sliderSettings} className="soft-skill-slider">
          {[team1, team2, team3,team4 , team5, team6, team7, team8, team9].map((img, idx) => (
            <div key={idx} className="slider-item">
              <img src={img} alt={`team-${idx}`} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
      

      {/* <div className="skill-block">
        <h5 className="text-white">Kỹ năng trình bày quan điểm rõ ràng</h5>
        <div className="static-image">
          <img src={present} alt="present" className="slider-img" />
        </div>
      </div> */}   

      
    </div>
  </section>

  );
}