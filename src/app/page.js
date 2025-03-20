'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardActions, CircularProgress } from '@mui/material';
import Link from 'next/link';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProductCard from '@/components/ProductCard';
import { api } from '@/services/api';

const categories = [
  {
    title: "New Arrivals",
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    description: "Check out our latest collection"
  },
  {
    title: "Best Sellers",
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    description: "Most popular items"
  },
  {
    title: "Special Offers",
    icon: <LocalOfferIcon sx={{ fontSize: 40 }} />,
    description: "Limited time deals"
  }
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const products = await api.getAllProducts();
        // Get first 3 products as featured products
        setFeaturedProducts(products.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

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

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Elevate Your Style
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Discover our latest collection of timeless fashion pieces
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                href="/products"
                startIcon={<ShoppingBagIcon />}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/hero-image.jpg"
                alt="Fashion Collection"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} md={4} key={category.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {category.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {category.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button size="small" color="primary" component={Link} href="/products">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Stay Updated
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Subscribe to our newsletter for the latest updates and exclusive offers
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Subscribe Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
