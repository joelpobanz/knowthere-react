import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/ContentCard.css';

const PlanCard = ({ plan, image, handleOpen }) => {
  console.log(plan);
  return (
    <div className='card'>
      <div class='content'>
        <CardMedia
          component="img"
          height="140"
          width='110%' // makes the image take the full width of the parent
          objectFit='cover'
          image={image} // this should be the URL of the image
          alt={plan.title}
        />
          <p class='heading'>{plan.title}
          <p class='para'>
            Price: {plan.price}
          </p>
          </p>
          <button class='btn' onClick={() => handleOpen(plan)}>
            View More
          </button>
          <button class='btn'>
            Buy Now
          </button>
      </div>
    </div>
  );
};

export default PlanCard;
