'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CircularProgress, 
  Paper, 
  IconButton, 
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Link from 'next/link';
import { FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { MdMale, MdFemale } from 'react-icons/md';
import { GiDiamondRing } from 'react-icons/gi';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import ProductCard from '@/components/ProductCard';
import { api } from '@/services/api';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const categories = [
  {
    title: "Men's Fashion",
    icon: <MdMale size={48} />,
    description: "Timeless menswear essentials and trending styles",
    href: "/products?category=men's clothing",
    color: '#1a237e',
    bgGradient: 'linear-gradient(135deg, #1a237e15 0%, #1a237e05 100%)'
  },
  {
    title: "Women's Fashion",
    icon: <MdFemale size={48} />,
    description: "Contemporary women's apparel and must-haves",
    href: "/products?category=women's clothing",
    color: '#c2185b',
    bgGradient: 'linear-gradient(135deg, #c2185b15 0%, #c2185b05 100%)'
  },
  {
    title: "Accessories",
    icon: <GiDiamondRing size={48} />,
    description: "Statement jewelry and finishing touches",
    href: "/products?category=jewelery",
    color: '#00796b',
    bgGradient: 'linear-gradient(135deg, #00796b15 0%, #00796b05 100%)'
  }
];

const features = [
  {
    icon: <FaTruck size={40} style={{ color: 'white' }} />,
    title: "Fast Fashion Delivery",
    description: "Free shipping on orders over $50"
  },
  {
    icon: <FaShieldAlt size={40} style={{ color: 'white' }} />,
    title: "Shop with Confidence",
    description: "Secure payments & returns"
  },
  {
    icon: <FaHeadset size={40} style={{ color: 'white' }} />,
    title: "Style Support",
    description: "Expert fashion advice available 24/7"
  }
];

// Dynamically import the ProductCarousel to avoid hydration issues
const ProductCarousel = dynamic(() => import('../components/ProductCarousel'), {
  ssr: false,
  loading: () => (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%' 
    }}>
      <CircularProgress />
    </Box>
  )
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      try {
        const allProducts = await api.getAllProducts();
        const filteredProducts = allProducts.filter(product => 
          product.category === "men's clothing" ||
          product.category === "women's clothing" ||
          product.category === "jewelery"
        );
        const shuffledProducts = [...filteredProducts].sort(() => Math.random() - 0.5).slice(0, 5);
        setProducts(shuffledProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Prevent hydration mismatch by not rendering until client-side
  if (!mounted) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          bgcolor: 'primary.main', 
          color: 'white',
          pt: { xs: 4, md: 6 },
          pb: { xs: 6, md: 8 },
          mb: { xs: 4, md: 6 },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                animation: 'slideIn 0.8s ease-out',
                '@keyframes slideIn': {
                  from: { transform: 'translateX(-100%)', opacity: 0 },
                  to: { transform: 'translateX(0)', opacity: 1 }
                }
              }}>
                <Typography 
                  variant={isMobile ? 'h3' : 'h2'} 
                  component="h1" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    lineHeight: 1.2
                  }}
                >
                  Elevate Your Style
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.9,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                    maxWidth: '600px'
                  }}
                >
                  Discover our curated collection of fashion and accessories
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/products"
                  startIcon={<ShoppingBagIcon />}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: '30px',
                    transition: 'all 0.3s ease',
                    background: 'linear-gradient(45deg, #E74C3C 30%, #C0392B 90%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: { xs: '300px', md: '400px' },
                animation: 'fadeIn 1s ease-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0 },
                  to: { opacity: 1 }
                },
                mx: { xs: 2, md: 4 },
                bgcolor: 'rgba(255,255,255,0.05)',
                borderRadius: 4,
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
              }}>
                <ProductCarousel products={products} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                    '& .feature-icon': {
                      transform: 'scale(1.1) rotate(5deg)'
                    }
                  }
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    mb: 2,
                    transition: 'transform 0.3s ease',
                    animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`,
                    '@keyframes fadeIn': {
                      from: { transform: 'scale(0.8)', opacity: 0 },
                      to: { transform: 'scale(1)', opacity: 1 }
                    }
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 600, 
            mb: 6,
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
          Explore Our Collections
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={category.title}>
              <Card 
                component={Link} 
                href={category.href}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  background: category.bgGradient,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 30px ${category.color}20`,
                    '& .category-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    }
                  },
                  animation: `slideIn 0.5s ease-out ${index * 0.2}s both`,
                  '@keyframes slideIn': {
                    from: { transform: 'translateX(-20px)', opacity: 0 },
                    to: { transform: 'translateX(0)', opacity: 1 }
                  }
                }}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  textAlign: 'center', 
                  p: 4,
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Box 
                    className="category-icon"
                    sx={{ 
                      color: category.color,
                      mb: 2,
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary'
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600, 
              mb: 6,
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
            Trending Now
          </Typography>
          <Grid container spacing={3}>
            {products.slice(0, 3).map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box sx={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`,
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
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/products"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                px: 4,
                borderRadius: '30px',
                transition: 'all 0.3s ease',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              View All Collection
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{
              animation: 'slideInLeft 0.8s ease-out',
              '@keyframes slideInLeft': {
                from: { transform: 'translateX(-50px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 }
              }
            }}>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -16,
                    left: 0,
                    width: 60,
                    height: 4,
                    bgcolor: 'primary.main',
                    borderRadius: 2
                  }
                }}
              >
                About Vogue Vistas
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
                Redefining Fashion for the Modern Era
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                At Vogue Vistas, we believe that fashion is more than just clothing - it is a form of self-expression that empowers individuals to showcase their unique personality and style.
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                Founded with a passion for quality and design, we curate collections that blend timeless elegance with contemporary trends, ensuring our customers always stay ahead in the fashion game.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white', borderRadius: 2, flex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>5k+</Typography>
                  <Typography variant="body2">Happy Customers</Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white', borderRadius: 2, flex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>500+</Typography>
                  <Typography variant="body2">Products</Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white', borderRadius: 2, flex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>50+</Typography>
                  <Typography variant="body2">Brands</Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              position: 'relative',
              height: '500px',
              animation: 'slideInRight 0.8s ease-out',
              '@keyframes slideInRight': {
                from: { transform: 'translateX(50px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 }
              }
            }}>
              <Paper
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
              <Paper
                sx={{
                  position: 'absolute',
                  top: '20%',
                  right: '10%',
                  width: '60%',
                  height: '60%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 4,
                  zIndex: -1,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                animation: 'slideInLeft 0.8s ease-out',
                '@keyframes slideInLeft': {
                  from: { transform: 'translateX(-50px)', opacity: 0 },
                  to: { transform: 'translateX(0)', opacity: 1 }
                }
              }}>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -16,
                      left: 0,
                      width: 60,
                      height: 4,
                      bgcolor: 'primary.main',
                      borderRadius: 2
                    }
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                  We would Love to Hear From You
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        p: 2,
                        borderRadius: '50%'
                      }}>
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>Visit Us</Typography>
                        <Typography variant="body2" color="text.secondary">
                          123 Fashion Street, NY 10001
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        p: 2,
                        borderRadius: '50%'
                      }}>
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>Email Us</Typography>
                        <Typography variant="body2" color="text.secondary">
                          support@voguevistas.com
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        p: 2,
                        borderRadius: '50%'
                      }}>
                        <PhoneIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>Call Us</Typography>
                        <Typography variant="body2" color="text.secondary">
                          +1 (555) 123-4567
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                animation: 'slideInRight 0.8s ease-out',
                '@keyframes slideInRight': {
                  from: { transform: 'translateX(50px)', opacity: 0 },
                  to: { transform: 'translateX(0)', opacity: 1 }
                }
              }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Send Us a Message
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Have a question or feedback? We are here to help!
                  </Typography>
                  <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          flex: 1,
                          borderRadius: 2,
                          bgcolor: 'grey.50'
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">Name</Typography>
                      </Paper>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          flex: 1,
                          borderRadius: 2,
                          bgcolor: 'grey.50'
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">Email</Typography>
                      </Paper>
                    </Box>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'grey.50'
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">Subject</Typography>
                    </Paper>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        minHeight: '120px',
                        bgcolor: 'grey.50'
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">Message</Typography>
                    </Paper>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: '30px',
                        py: 1.5,
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1a237e 0%, #534bae 100%)',
            color: 'white',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
              zIndex: 1
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Join Our Style Club
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
              Get early access to new arrivals, style tips, and exclusive offers
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ 
                px: 4,
                borderRadius: '30px',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(45deg, #E74C3C 30%, #C0392B 90%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                }
              }}
            >
              Subscribe Now
            </Button>
            <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton 
                sx={{ 
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          pt: 8,
          pb: 4,
          mt: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ mb: 8 }} justifyContent="center">
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                {['Home', 'Products', 'About', 'Contact'].map((link) => (
                  <Button
                    key={link}
                    component={Link}
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    sx={{ 
                      color: 'white',
                      opacity: 0.8,
                      '&:hover': {
                        opacity: 1,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    {link}
                  </Button>
                ))}
              </Box>
            </Grid>

            {/* Categories */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Categories
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                {categories.map((category) => (
                  <Button
                    key={category.title}
                    component={Link}
                    href={category.href}
                    sx={{ 
                      color: 'white',
                      opacity: 0.8,
                      '&:hover': {
                        opacity: 1,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    {category.title}
                  </Button>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    support@voguevistas.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    123 Fashion Street, NY 10001
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <IconButton 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

          {/* Bottom Bar */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © 2025 Vogue Vistas. All rights reserved.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Developed by jsmitty
              </Typography>
              <IconButton
                href="https://github.com/jacobsmxth"
          target="_blank"
          rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
