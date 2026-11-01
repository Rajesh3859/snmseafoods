import { useParams, Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { products } from '../data/products'

function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2, fontFamily: '"Oswald", sans-serif', color: '#102B49' }}>
          Product Not Found
        </Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/products"
          sx={{ color: '#102B49', borderColor: '#102B49', borderRadius: '50px' }}
        >
          Back to Products
        </Button>
      </Container>
    )
  }

  const handleOrderWhatsApp = () => {
    const text = `Hi SNM Seafoods, I would like to order ${product.name} (Price: ₹${product.price}/${product.unit}).`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/products"
        sx={{
          mb: 3,
          fontFamily: '"Oswald", sans-serif',
          color: '#102B49',
          fontWeight: 600,
          '&:hover': { color: '#B89F56' },
        }}
      >
        All Products
      </Button>
      <Paper
        sx={{
          p: 5,
          borderRadius: 3,
          bgcolor: '#FFFFFF',
          border: '2px solid #D3BC78',
          boxShadow: '0 8px 30px rgba(16, 43, 73, 0.08)',
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Chip
              label={product.category}
              sx={{
                mb: 2,
                bgcolor: '#102B49',
                color: '#D3BC78',
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                color: '#102B49',
                fontFamily: '"Oswald", sans-serif',
                mb: 1.5,
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#102B49',
                fontFamily: '"Oswald", sans-serif',
                mb: 3,
              }}
            >
              ₹{product.price}{' '}
              <Box component="span" sx={{ fontSize: '1.1rem', color: '#536575', fontWeight: 400 }}>
                / {product.unit}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#263746',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                fontFamily: '"Josefin Sans", sans-serif',
                mb: 4.5,
              }}
            >
              {product.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={handleOrderWhatsApp}
                sx={{
                  bgcolor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.04em',
                  px: 3.5,
                  py: 1.3,
                  '&:hover': { bgcolor: '#1EBE5D' },
                }}
              >
                Order on WhatsApp
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/custom-orders"
                size="large"
                sx={{
                  color: '#102B49',
                  borderColor: '#102B49',
                  borderRadius: '50px',
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.04em',
                  px: 3.5,
                  py: 1.3,
                  '&:hover': {
                    bgcolor: '#102B49',
                    color: '#FFFFFF',
                    borderColor: '#102B49',
                  },
                }}
              >
                Request Custom Cut +
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ProductDetails
