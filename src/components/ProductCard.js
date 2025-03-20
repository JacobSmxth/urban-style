'use client';

import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card sx={{ 
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
      }
    }}>
      <Box sx={{ position: 'relative', paddingTop: '100%' }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="caption" 
          color="text.secondary" 
          sx={{ 
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 1
          }}
        >
          {product.category}
        </Typography>
        <Typography 
          variant="h6" 
          component="h2" 
          sx={{ 
            marginBottom: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '3.5rem'
          }}
        >
          {product.title}
        </Typography>
        <Typography 
          variant="h6" 
          color="primary" 
          sx={{ 
            marginBottom: 2,
            fontWeight: 600
          }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddToCart}
          sx={{
            marginTop: 'auto',
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'primary.dark',
            }
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 