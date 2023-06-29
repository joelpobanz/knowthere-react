import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PlanCard = ({ plan, image, handleOpen }) => {
  console.log(plan);
  return (
    <Card sx={{ 
            maxWidth: 345,
            borderRadius: '50px',
            background: '#FDD835',
            boxShadow: '20px 20px 60px #d7b82d, -20px -20px 60px #fff83d',
            margin: '20px',  // Added margin for better view 
        }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image} // this should be the URL of the image
        alt={plan.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {plan.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {plan.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={() => handleOpen(plan)}>
          View More
        </Button>
        <Button size="small" color="secondary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlanCard;
