'use client';

import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  Divider,
  TextField,
  Paper,
  Stack,
  Card,
  CardContent,
  Badge,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <Box 
        sx={{ 
          textAlign: 'center', 
          py: 8,
          animation: 'fadeIn 0.5s ease-out',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Add some products to your cart and they will appear here
        </Typography>
        <Button
          component={Link}
          href="/products"
          variant="contained"
          size="large"
          sx={{
            borderRadius: '30px',
            px: 4,
            py: 1.5,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
            }
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Paper 
        elevation={0}
        sx={{ 
          p: 3,
          mb: 4,
          borderRadius: 2,
          background: 'linear-gradient(to right, #f5f5f5, #ffffff)'
        }}
      >
        <Stack spacing={3}>
          {items.map((item, index) => (
            <Card 
              key={item.id}
              sx={{
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: 'none',
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                '@keyframes slideIn': {
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' }
                }
              }}
            >
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: 'contain',
                      backgroundColor: 'grey.50',
                      p: 1,
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Unit Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                      <Tooltip title="Decrease quantity">
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                          sx={{ 
                            border: '1px solid',
                            borderColor: 'divider',
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <TextField
                        value={item.quantity}
                        size="small"
                        sx={{ 
                          width: 60,
                          '& .MuiInputBase-input': {
                            textAlign: 'center',
                            fontWeight: 600
                          }
                        }}
                        inputProps={{ 
                          min: 1,
                          style: { textAlign: 'center' }
                        }}
                      />
                      <Tooltip title="Increase quantity">
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                          sx={{ 
                            border: '1px solid',
                            borderColor: 'divider',
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          ml: 'auto',
                          fontWeight: 600,
                          color: 'primary.main'
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <Tooltip title="Remove item">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleRemoveItem(item.id)}
                          sx={{
                            ml: 2,
                            '&:hover': {
                              backgroundColor: 'error.light',
                              color: 'error.contrastText'
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Paper>

      {/* Order Summary */}
      <Paper 
        elevation={0}
        sx={{ 
          p: 3,
          borderRadius: 2,
          background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
          animation: 'slideUp 0.5s ease-out',
          '@keyframes slideUp': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Box sx={{ my: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography>${total.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography color="text.secondary">Shipping</Typography>
            <Typography color="success.main">FREE</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6" color="primary.main">
              ${total.toFixed(2)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalShippingIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              Free Shipping
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SecurityIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              Secure Payment
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClearCart}
            sx={{
              flex: 1,
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'error.light',
                color: 'error.contrastText',
                borderColor: 'error.light'
              }
            }}
          >
            Clear Cart
          </Button>
          <Button
            component={Link}
            href="/checkout"
            variant="contained"
            size="large"
            sx={{
              flex: 2,
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cart; 