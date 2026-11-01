import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'

function ContactCTA() {
  return (
    <Box
      sx={{
        py: 9,
        bgcolor: '#102B49',
        color: '#FFFFFF',
        textAlign: 'center',
        borderTop: '2px solid #D3BC78',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            color: '#D3BC78',
            letterSpacing: '0.15em',
            fontSize: '0.95rem',
            display: 'block',
            mb: 1,
          }}
        >
          DIRECT FISHERIES SUPPLY
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            mb: 2,
            color: '#FFFFFF',
          }}
        >
          Have a Custom Requirement or Bulk Query?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Josefin Sans", sans-serif',
            color: '#F5F2E9',
            opacity: 0.9,
            mb: 4.5,
            maxWidth: 620,
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          Connect directly with our seafood specialists for bulk contracts, daily hotel deliveries, or custom cut orders.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '0.04em',
              px: 4,
              py: 1.3,
              backgroundColor: '#D3BC78',
              color: '#102B49',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#FFFFFF',
                color: '#102B49',
              },
            }}
          >
            Contact Our Team +
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/custom-orders"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.04em',
              px: 4,
              py: 1.3,
              color: '#FFFFFF',
              borderColor: '#D3BC78',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: 'rgba(211, 188, 120, 0.15)',
                borderColor: '#FFFFFF',
              },
            }}
          >
            Request Custom Cut +
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default ContactCTA
