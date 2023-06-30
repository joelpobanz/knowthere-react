import React from 'react';
import { Parallax } from 'react-parallax';
import AboutUs from './AboutUs';
import Products from './Products';
import Community from './Community';
import '../styles/LandingPage.css';
import map1 from '../images/map1.jpg';

const LandingPage = () => {
  return (
    <div>
      <Parallax bgImage={map1} strength={1000}>
        <div className="section-container">
          <AboutUs />
        </div>
        <div className="section-container">
          <Products />
        </div>
        <div className="section-container">
          <Community />
        </div>
      </Parallax>
    </div>
  );
};

export default LandingPage;
