import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import { services } from '../data/services'

function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeading
        title="Our Specialized Services"
        subtitle="From morning harbor procurement to customized cold-chain delivery"
      />
      <Grid container spacing={4} sx={{ mb: 7 }}>
        {services.map((service) => (
          <Grid key={service.id} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                p: 2.5,
                borderRadius: 2.5,
                bgcolor: '#FFFFFF',
                border: '1px solid rgba(211, 188, 120, 0.45)',
                boxShadow: '0 4px 18px rgba(16, 43, 73, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: '#D3BC78',
                  boxShadow: '0 10px 25px rgba(16, 43, 73, 0.1)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: 600,
                    color: '#102B49',
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Josefin Sans", sans-serif',
                    color: '#263746',
                    lineHeight: 1.8,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          bgcolor: '#102B49',
          color: '#FFFFFF',
          p: 5,
          borderRadius: 3,
          textAlign: 'center',
          border: '2px solid #D3BC78',
          boxShadow: '0 8px 30px rgba(16, 43, 73, 0.12)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            mb: 2,
            color: '#D3BC78',
          }}
        >
          Need a Custom Supply Contract?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Josefin Sans", sans-serif',
            color: '#F5F2E9',
            opacity: 0.9,
            mb: 3.5,
            maxWidth: 640,
            mx: 'auto',
            lineHeight: 1.8,
          }}
        >
          We provide flexible billing, volume discounts, and scheduled morning delivery routes for restaurants, commercial kitchens, and seafood vendors.
        </Typography>
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
            bgcolor: '#D3BC78',
            color: '#102B49',
            borderRadius: '50px',
            px: 4,
            py: 1.3,
            '&:hover': {
              bgcolor: '#FFFFFF',
              color: '#102B49',
            },
          }}
        >
          Talk to Our Supply Manager +
        </Button>
      </Box>
    </Container>
  )
}

export default Services
