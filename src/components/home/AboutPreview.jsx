import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'

function AboutPreview() {
  return (
    <Box sx={{ py: 9, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeading
              title="Welcome to SNM Seafoods"
              subtitle="Over two decades of excellence in harbour-fresh seafood"
              align="left"
            />
            <Typography variant="body1" sx={{ color: '#263746', mb: 3, lineHeight: 1.8 }}>
              At SNM Seafoods, we take pride in our deep-rooted relationships with local coastal fishing vessels. We deliver sea-to-door fresh seafood with zero chemical preservatives and unmatched hygienic cold-chain standards.
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/about"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#102B49',
                borderColor: '#102B49',
                borderRadius: '50px',
                px: 3.5,
                py: 1.2,
                '&:hover': {
                  bgcolor: '#102B49',
                  color: '#FFFFFF',
                  borderColor: '#102B49',
                },
              }}
            >
              Learn More About Us +
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                bgcolor: '#102B49',
                color: '#FFFFFF',
                borderRadius: 3,
                p: 5,
                textAlign: 'center',
                border: '2px solid #D3BC78',
                boxShadow: '0 12px 30px rgba(16, 43, 73, 0.15)',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700,
                  color: '#D3BC78',
                  mb: 1,
                  fontSize: '3.5rem',
                }}
              >
                100%
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  mb: 2,
                  letterSpacing: '0.03em',
                }}
              >
                Chemical-Free Fresh Catch
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>
                Direct morning harbor sourcing, precision descaling and butchery, and vacuum-sealed cold-chain transport.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutPreview
