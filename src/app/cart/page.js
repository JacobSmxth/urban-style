'use client';

import { Container, Typography, Box } from '@mui/material';
import Cart from '../../components/Cart';

export default function CartPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Review and manage your cart items
        </Typography>
      </Box>
      <Cart />
    </Container>
  );
} 