'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Button, CircularProgress } from '@mui/material';
import { api } from '@/services/api';

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography align="center">
          Product not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: 400 }}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Category: {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
} 