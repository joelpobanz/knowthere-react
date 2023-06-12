import React from 'react';
import { Parallax } from 'react-parallax';
import AboutUs from './AboutUs';
import Products from './Products';
import Community from './Community';
import '../styles/LandingPage.css';

import map1 from '../images/map1.jpg';
import map2 from '../images/map2.jpg';
import map3 from '../images/map3.jpg';

const LandingPage = () => {
  return (
    <div>
      <Parallax bgImage={map1} strength={500}>
        <div className="section-container">
          <AboutUs />
        </div>
      </Parallax>

      <Parallax bgImage={map2} strength={500}>
        <div className="section-container">
          <Products />
        </div>
      </Parallax>

      <Parallax bgImage={map3} strength={500}>
        <div className="section-container">
          <Community />
        </div>
      </Parallax>
    </div>
  );
};

export default LandingPage;
