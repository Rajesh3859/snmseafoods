import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#102B49',
        color: '#FFFFFF',
        py: 6,
        mt: 'auto',
        borderTop: '2px solid #D3BC78',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 700,
                letterSpacing: '0.06em',
                mb: 2,
                color: '#D3BC78',
              }}
            >
              SNM SEAFOODS
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>
              Supplying the finest, freshest, sustainably sourced seafood directly from coastal waters
              to homes, restaurants, and markets.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.04em',
                mb: 2,
                color: '#D3BC78',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Services', path: '/services' },
                { label: 'Custom Orders', path: '/custom-orders' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#D3BC78',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.04em',
                mb: 2,
                color: '#D3BC78',
              }}
            >
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 1 }}>
              Harbour Road, Coastal Market, Fisheries Terminal
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 1 }}>
              Phone: +91 98765 43210
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Email: info@snmseafoods.com
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(211, 188, 120, 0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            &copy; {new Date().getFullYear()} SNM Seafoods. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
