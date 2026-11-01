import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'

function Hero() {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        background: 'linear-gradient(135deg, #102B49 0%, #0A1D33 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '2px solid #D3BC78',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            fontSize: '1rem',
            letterSpacing: '0.2em',
            color: '#D3BC78',
            display: 'block',
            mb: 1.5,
          }}
        >
          SUSTAINABLY SOURCED HARBOUR FRESH
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '2.4rem', md: '3.8rem' },
            lineHeight: 1.15,
            mb: 2.5,
            color: '#FFFFFF',
          }}
        >
          Fresh From The Ocean <Box component="span" sx={{ color: '#D3BC78' }}>To Your Table</Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Josefin Sans", sans-serif',
            fontWeight: 400,
            color: '#F5F2E9',
            opacity: 0.9,
            mb: 4.5,
            maxWidth: 680,
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Premium quality fish, prawns, crabs, and specialty seafood delivered with certified cold-chain freshness.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/products"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.04em',
              px: 4,
              py: 1.4,
              backgroundColor: '#D3BC78',
              color: '#102B49',
              borderRadius: '50px',
              boxShadow: '0 8px 20px rgba(211, 188, 120, 0.35)',
              '&:hover': {
                backgroundColor: '#FFFFFF',
                color: '#102B49',
              },
            }}
          >
            Explore Fresh Catch +
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/custom-orders"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '0.04em',
              px: 4,
              py: 1.4,
              color: '#FFFFFF',
              borderColor: '#D3BC78',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: 'rgba(211, 188, 120, 0.15)',
                borderColor: '#FFFFFF',
              },
            }}
          >
            Custom & Bulk Orders
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
