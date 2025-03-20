'use client';

import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        backgroundColor: 'grey.100',
      }}
    >
      {products.map((product, index) => (
        <Box
          key={product.id}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              padding: 2,
            }}
          />
        </Box>
      ))}
      
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ProductCarousel; 