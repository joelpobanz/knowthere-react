import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';
import img from '../images/colorfulMap.jpg'

const Products = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

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


  return (
    <div>
      {/* {products && products.map((product) => (
      <ProductCard product={product} handleOpen={handleOpen} key={product.id} />
      ))} */}
      <ProductCard product={testProduct} handleOpen={handleOpen} />
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

