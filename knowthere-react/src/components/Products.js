import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlanCard from './PlanCard';
import '../styles/Products.css';
import '../styles/ContentCard.css';
import img from '../images/colorfulMap.jpg';
import img2 from '../images/colorfulMap2.jpg';  

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]); // Corrected variable name

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

  useEffect(() => {
    document.body.style.backgroundColor = "#FDD835";

    // When component unmounts, set the background color back to default
    return () => {
        document.body.style.backgroundColor = null;
    }
  }, []);

  const handleOpen = (plan) => {
    console.log('Opening product', plan);
    setCurrentProduct(plan);
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Closing product');
    setOpen(false);
  };

  return (
    <div className='plans-container'>
      {subscriptionPlans.map(plan => (
         <PlanCard 
          plan={plan} 
          handleOpen={handleOpen} 
          image={plan.id === 1 ? img : img2}
          description={`This is a ${plan.title} plan that will deliver a new state package each month for ${plan.price}`}
          key={plan.id} 
        />
      ))}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
            width: 400, 
            padding: 4, 
            bgcolor: 'background.paper', 
            m: 'auto', 
            mt: 10,
            border: '1px solid #000',
            boxShadow: 24,
            p: 4 
        }}>
          <Typography variant="h6" component="h2">
            {currentProduct && currentProduct.title}
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            {currentProduct && `This is a ${currentProduct.title} plan that will deliver a new state package each month for until the subscription is cancelled. Only ${currentProduct.price}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Products;
