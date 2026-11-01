import { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import { products } from '../data/products'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filtered =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeading
        title="Our Seafood Catalog"
        subtitle="Explore our daily catch of fresh fish, crustaceans, and cephalopods"
      />
      <Stack direction="row" spacing={1} sx={{ mb: 5, flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat
          return (
            <Chip
              key={cat}
              label={cat}
              clickable
              onClick={() => setSelectedCategory(cat)}
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontSize: '14px',
                letterSpacing: '0.04em',
                px: 1.5,
                py: 2.2,
                borderRadius: '50px',
                fontWeight: isSelected ? 600 : 500,
                backgroundColor: isSelected ? '#102B49' : '#FFFFFF',
                color: isSelected ? '#D3BC78' : '#263746',
                border: isSelected ? '1.5px solid #D3BC78' : '1px solid rgba(211, 188, 120, 0.4)',
                '&:hover': {
                  backgroundColor: isSelected ? '#102B49' : 'rgba(211, 188, 120, 0.15)',
                },
              }}
            />
          )
        })}
      </Stack>
      <Grid container spacing={3.5}>
        {filtered.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2.5,
                bgcolor: '#FFFFFF',
                border: '1px solid rgba(211, 188, 120, 0.4)',
                boxShadow: '0 4px 18px rgba(16, 43, 73, 0.05)',
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
                    fontWeight: 600,
                    letterSpacing: '0.04em',
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
    </Container>
  )
}

export default Products
