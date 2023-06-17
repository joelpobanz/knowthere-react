import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product, handleOpen }) => {
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
        image={product.image} // this should be the URL of the image
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleOpen(product)}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
