import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SectionHeading from '../components/common/SectionHeading'

const cutTypes = [
  'Whole (Cleaned & Descaled)',
  'Steaks / Slices',
  'Boneless Fillets',
  'Curry Cut',
  'Headless & Deveined (Prawns)',
  'Live / Whole (Crab)',
]

function CustomOrders() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    seafoodType: '',
    quantityKg: '',
    cutPreference: '',
    notes: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello SNM Seafoods, Custom Order Request:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Seafood: ${formData.seafoodType}
- Quantity: ${formData.quantityKg} kg
- Cut: ${formData.cutPreference}
- Notes: ${formData.notes || 'None'}`

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <SectionHeading
        title="Custom & Bulk Orders"
        subtitle="Specify exact cuts, portions, and quantities for your household, hotel, or special event"
      />
      <Paper
        sx={{
          p: 5,
          borderRadius: 3,
          bgcolor: '#FFFFFF',
          border: '2px solid #D3BC78',
          boxShadow: '0 8px 30px rgba(16, 43, 73, 0.08)',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            required
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required
            label="Seafood Required (e.g. Surmai, Tiger Prawns, Pomfret)"
            name="seafoodType"
            value={formData.seafoodType}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required
            label="Estimated Quantity (in kg)"
            name="quantityKg"
            type="number"
            value={formData.quantityKg}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            select
            required
            label="Preferred Cut / Cleaning"
            name="cutPreference"
            value={formData.cutPreference}
            onChange={handleChange}
            fullWidth
          >
            {cutTypes.map((cut) => (
              <MenuItem key={cut} value={cut}>
                {cut}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Special Instructions / Delivery Date"
            name="notes"
            multiline
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            sx={{
              py: 1.5,
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.04em',
              borderRadius: '50px',
              bgcolor: '#25D366',
              color: '#FFFFFF',
              '&:hover': { bgcolor: '#1EBE5D' },
            }}
          >
            Submit Custom Order via WhatsApp
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default CustomOrders
