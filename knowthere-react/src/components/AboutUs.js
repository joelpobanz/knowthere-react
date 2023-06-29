import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const AboutUs = () => {
  return (
    // <div className="about-us">
    //   <h2>About Us</h2>
    //   <p>
    //       Knowthere is an online village of curious people from all across the US. Our mission:
    //       <span>
    //         To empower exploration, learning, and growth as a community through thoughtfully curated educational content and experiences, nurturing a love for learning and creating meaningful memories.
    //       </span>
    //       Our Value:
    //       <span>
    //         Our Exploration Packs deliver engaging and educational experiences, providing content that sparks curiosity, shines light on context and drives exploration while fostering a supportive and interactive community. We help people discover there, know there and go there
    //       </span>
    //   </p>
    // </div>
    <div class="card">
      <div class="content">
        <p class="heading">About Us
          </p><p class="para">
          Knowthere is an online village of curious people from all across the US.
        </p>
        <button class="btn">Read more</button>
      </div>
    </div>
  );
};

export default AboutUs;
