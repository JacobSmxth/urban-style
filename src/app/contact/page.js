'use client';

import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Button,
  TextField,
  useTheme,
  useMediaQuery
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from '@/components/Footer';

export default function Contact() {
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
            Contact Us
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
            We&apos;re Here to Help You
          </Typography>
        </Container>
      </Box>

      {/* Contact Info Cards */}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 1.5,
                  borderRadius: '50%'
                }}>
                  <LocationOnIcon />
                </Box>
                <Typography variant="h6">Visit Us</Typography>
              </Box>
              <Typography color="text.secondary">
                123 Fashion Street
                <br />
                New York, NY 10001
                <br />
                United States
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 1.5,
                  borderRadius: '50%'
                }}>
                  <EmailIcon />
                </Box>
                <Typography variant="h6">Email Us</Typography>
              </Box>
              <Typography color="text.secondary">
                support@voguevista.com
                <br />
                sales@voguevista.com
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 1.5,
                  borderRadius: '50%'
                }}>
                  <PhoneIcon />
                </Box>
                <Typography variant="h6">Call Us</Typography>
              </Box>
              <Typography color="text.secondary">
                +1 (555) 123-4567
                <br />
                Mon - Fri, 9am - 6pm EST
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
                Send Us a Message
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                We&apos;d Love to Hear From You
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '30px',
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
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              height: '100%',
              minHeight: 400,
              position: 'relative',
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
                  height: '100%',
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Connect With Us
                </Typography>
                <Typography paragraph color="text.secondary">
                  Follow us on social media for the latest updates, style tips, and exclusive offers.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <Button
                    variant="contained"
                    startIcon={<InstagramIcon />}
                    sx={{
                      bgcolor: '#E1306C',
                      '&:hover': { bgcolor: '#C13584' }
                    }}
                  >
                    Instagram
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<FacebookIcon />}
                    sx={{
                      bgcolor: '#4267B2',
                      '&:hover': { bgcolor: '#365899' }
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<TwitterIcon />}
                    sx={{
                      bgcolor: '#1DA1F2',
                      '&:hover': { bgcolor: '#1991DA' }
                    }}
                  >
                    Twitter
                  </Button>
                </Box>
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h6" gutterBottom>
                    Business Hours
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography color="text.secondary">Monday - Friday</Typography>
                    <Typography>9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography color="text.secondary">Saturday</Typography>
                    <Typography>10:00 AM - 4:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Sunday</Typography>
                    <Typography>Closed</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ height: 400, width: '100%', bgcolor: 'grey.100', mt: 8 }}>
        {/* Add your map component here */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary'
          }}
        >
          <Typography>Map Component Placeholder</Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 