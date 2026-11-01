import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import SectionHeading from '../common/SectionHeading'
import { services } from '../../data/services'

function ServicesPreview() {
  return (
    <Box sx={{ py: 9, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive seafood processing, logistics, and bulk wholesale supply"
        />
        <Grid container spacing={3.5}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: 2.5,
                  textAlign: 'center',
                  bgcolor: '#F5F2E9',
                  border: '1px solid rgba(211, 188, 120, 0.45)',
                  boxShadow: '0 4px 16px rgba(16, 43, 73, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#D3BC78',
                    boxShadow: '0 10px 25px rgba(16, 43, 73, 0.1)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: 'rgba(211, 188, 120, 0.25)',
                      color: '#102B49',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontWeight: 700,
                      fontSize: '1.2rem',
                    }}
                  >
                    ★
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      fontWeight: 600,
                      mb: 1.5,
                      color: '#102B49',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
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
      </Container>
    </Box>
  )
}

export default ServicesPreview
