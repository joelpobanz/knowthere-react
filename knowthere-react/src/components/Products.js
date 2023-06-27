import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';
import img from '../images/colorfulMap.jpg'
import img2 from '../images/colorfulMap2.jpg'  // Your second image

const Products = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/subscription_plans`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (response.status === 200) {
          setSubscriptionPlans(response.data);
        }
      } catch (error) {
        console.error('Error fetching subscription plans:', error);
      }
    };

    fetchSubscriptionPlans();
  }, []);

  const handleOpen = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Hardcoded product for testing
  const testProduct = {
    id: '1',
    name: 'Test Product',
    image: img  // Placeholder image url
  };
  
  const testProduct2 = {
    id: '2',
    name: 'Test Product 2',
    image: img2  // Placeholder image url
  };

  return (
    <div>
      <ProductCard product={testProduct} handleOpen={handleOpen} />
      <ProductCard product={testProduct2} handleOpen={handleOpen} />
      {subscriptionPlans.map(plan => (
        <ProductCard product={plan} handleOpen={handleOpen} key={plan.id} />
      ))}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, padding: 4, bgcolor: 'background.paper', m: 'auto', mt: 10 }}>
          <Typography variant="h6" component="h2">
            {currentProduct && currentProduct.name}
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            {currentProduct && currentProduct.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Products;
