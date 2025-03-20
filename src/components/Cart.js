'use client';

import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  Divider,
  TextField,
  Paper,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Your cart is empty
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={3}>
        {items.map((item) => (
          <Box key={item.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: 'contain',
                  backgroundColor: 'grey.50',
                  p: 1,
                  borderRadius: 1
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={500}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price.toFixed(2)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    value={item.quantity}
                    size="small"
                    sx={{ width: 60 }}
                    inputProps={{ min: 1, style: { textAlign: 'center' } }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                    sx={{ ml: 'auto' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">
            Total: ${total.toFixed(2)}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </Box>
        
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </Paper>
  );
};

export default Cart; 