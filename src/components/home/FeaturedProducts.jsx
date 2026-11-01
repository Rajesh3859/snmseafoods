import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { products } from '../../data/products'

function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)

  return (
    <Box sx={{ py: 9, bgcolor: '#F5F2E9' }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Today's Fresh Catch"
          subtitle="Directly sourced from the morning harbour auction and delivered fresh"
        />
        <Grid container spacing={3.5}>
          {featured.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2.5,
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(211, 188, 120, 0.4)',
                  boxShadow: '0 6px 20px rgba(16, 43, 73, 0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 28px rgba(16, 43, 73, 0.12)',
                    borderColor: '#D3BC78',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      color: '#B89F56',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      display: 'block',
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      fontWeight: 600,
                      color: '#102B49',
                      mt: 0.5,
                      mb: 1.5,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Josefin Sans", sans-serif',
                      color: '#263746',
                      lineHeight: 1.7,
                      mb: 2.5,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      color: '#102B49',
                      fontWeight: 700,
                    }}
                  >
                    ₹{item.price}{' '}
                    <Box component="span" sx={{ fontSize: '0.9rem', color: '#536575', fontWeight: 400 }}>
                      / {item.unit}
                    </Box>
                  </Typography>
                </CardContent>
                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to={`/products/${item.id}`}
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      letterSpacing: '0.04em',
                      fontWeight: 600,
                      bgcolor: '#102B49',
                      color: '#FFFFFF',
                      borderRadius: '50px',
                      py: 1.2,
                      '&:hover': {
                        bgcolor: '#D3BC78',
                        color: '#102B49',
                      },
                    }}
                  >
                    View Details +
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/products"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#102B49',
              borderColor: '#102B49',
              borderRadius: '50px',
              px: 4,
              py: 1.2,
              '&:hover': {
                bgcolor: '#102B49',
                color: '#FFFFFF',
                borderColor: '#102B49',
              },
            }}
          >
            View All Products +
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturedProducts
