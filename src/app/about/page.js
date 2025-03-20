'use client';

import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import Footer from '@/components/Footer';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
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
          <Typography 
            variant={isMobile ? 'h3' : 'h1'} 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textAlign: 'center',
              mb: 3
            }}
          >
            The Vogue Vistas Journey
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9
            }}
          >
            Crafting Fashion Excellence Since 2024
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Our Mission
              </Typography>
              <Typography>
                To provide exceptional fashion that empowers individuals to express their unique style with confidence and authenticity.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Our Vision
              </Typography>
              <Typography>
                To be the leading destination for fashion enthusiasts seeking quality, style, and sustainable fashion choices.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Our Values
              </Typography>
              <Typography>
                Quality, sustainability, innovation, and customer satisfaction drive everything we do.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Story Section */}
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
                The Vogue Vistas Journey
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                Vogue Vistas began with a simple yet powerful idea: to create a fashion destination that celebrates individuality and style. Our journey started in 2024, and since then, we have been dedicated to bring you the finest selection of fashion and accessories.
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                What sets us apart is our commitment to quality and customer satisfaction. We carefully curate our collections to ensure that every piece meets our high standards of excellence.
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

      {/* Team Section */}
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
            Meet Our Team
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            Passionate fashion experts dedicated to bringing you the best in style
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Style Consultant',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3'
              }
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      mx: 'auto',
                      mb: 3,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
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
            overflow: 'hidden'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Start Shopping?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9 }}>
            Explore our latest collections and find your perfect style
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            href="/products"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              background: 'linear-gradient(45deg, #E74C3C 30%, #C0392B 90%)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            Shop Now
          </Button>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
} 