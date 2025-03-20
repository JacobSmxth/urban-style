'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  CircularProgress, 
  Chip,
  TextField,
  InputAdornment,
  Paper,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Collapse,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import ProductCard from '@/components/ProductCard';
import { api } from '@/services/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: "men's clothing", label: "Men's Fashion" },
    { value: "women's clothing", label: "Women's Fashion" },
    { value: 'jewelery', label: 'Accessories' }
  ];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await api.getAllProducts();
        const filteredProducts = allProducts.filter(product => 
          product.category === "men's clothing" ||
          product.category === "women's clothing" ||
          product.category === "jewelery"
        );
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = () => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const displayedProducts = filteredAndSortedProducts();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 600,
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2
            }
          }}
        >
          Our Collection
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          align="center" 
          sx={{ mb: 4 }}
        >
          Discover our curated selection of fashion and accessories
        </Typography>
      </Box>

      {/* Filters Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          mb: 4, 
          p: 3,
          borderRadius: 2,
          background: 'linear-gradient(to right, #f5f5f5, #ffffff)'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: 'white' }}
          />
          <Button
            variant="outlined"
            onClick={() => setShowFilters(!showFilters)}
            startIcon={<FilterListIcon />}
            sx={{ 
              minWidth: 'auto',
              whiteSpace: 'nowrap',
              px: 2
            }}
          >
            Filters
          </Button>
        </Box>

        <Collapse in={showFilters}>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <FormControl fullWidth variant="outlined" sx={{ bgcolor: 'white' }}>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <FilterListIcon />
                  </InputAdornment>
                }
              >
                {categories.map(category => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" sx={{ bgcolor: 'white' }}>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <SortIcon />
                  </InputAdornment>
                }
              >
                {sortOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Collapse>
      </Paper>

      {/* Results Summary */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Showing {displayedProducts.length} {displayedProducts.length === 1 ? 'product' : 'products'}
        </Typography>
        {selectedCategory !== 'all' && (
          <Chip 
            label={categories.find(c => c.value === selectedCategory)?.label}
            onDelete={() => setSelectedCategory('all')}
            color="primary"
            variant="outlined"
          />
        )}
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {displayedProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box sx={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              '@keyframes fadeIn': {
                from: { transform: 'translateY(20px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 }
              }
            }}>
              <ProductCard product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* No Results Message */}
      {displayedProducts.length === 0 && (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8,
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No products found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Box>
      )}
    </Container>
  );
} 