import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  IconButton,
  Divider
} from '@mui/material';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import DiamondIcon from '@mui/icons-material/Diamond';

export default function Footer() {
  const quickLinks = [
    { title: 'Home', href: '/', icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { title: 'Products', href: '/products', icon: <ShoppingBagIcon sx={{ fontSize: 20 }} /> },
    { title: 'About', href: '/about', icon: <InfoIcon sx={{ fontSize: 20 }} /> },
    { title: 'Contact', href: '/contact', icon: <ContactMailIcon sx={{ fontSize: 20 }} /> }
  ];

  const categories = [
    { title: "Men's Fashion", href: "/products?category=men's clothing", icon: <MaleIcon sx={{ fontSize: 20 }} /> },
    { title: "Women's Fashion", href: "/products?category=women's clothing", icon: <FemaleIcon sx={{ fontSize: 20 }} /> },
    { title: "Jewelry", href: "/products?category=jewelery", icon: <DiamondIcon sx={{ fontSize: 20 }} /> }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main',
        color: 'white',
        pb: 3,
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
        <Grid container spacing={4} sx={{ py: 8 }} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              {quickLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  href={link.href}
                  startIcon={link.icon}
                  sx={{ 
                    color: 'white',
                    opacity: 0.8,
                    '&:hover': {
                      opacity: 1,
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {link.title}
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
                  startIcon={category.icon}
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
                  support@voguevista.com
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

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pt: 3,
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Vogue Vista. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Developed by jsmitty
            </Typography>
            <IconButton 
              size="small"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 