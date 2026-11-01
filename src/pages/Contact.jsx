import { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SectionHeading from '../components/common/SectionHeading'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeading
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, wholesale inquiries, or general feedback."
      />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            sx={{
              p: 4.5,
              height: '100%',
              bgcolor: '#102B49',
              color: '#FFFFFF',
              borderRadius: 3,
              border: '2px solid #D3BC78',
              boxShadow: '0 8px 25px rgba(16, 43, 73, 0.12)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 700,
                letterSpacing: '0.04em',
                mb: 3,
                color: '#D3BC78',
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LocationOnIcon sx={{ mr: 2, color: '#D3BC78' }} />
              <Typography variant="body1" sx={{ color: '#FFFFFF', fontFamily: '"Josefin Sans", sans-serif' }}>
                Harbour Road, Coastal Market, Fisheries Terminal
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: '#D3BC78' }} />
              <Typography variant="body1" sx={{ color: '#FFFFFF', fontFamily: '"Josefin Sans", sans-serif' }}>
                +91 98765 43210
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ mr: 2, color: '#D3BC78' }} />
              <Typography variant="body1" sx={{ color: '#FFFFFF', fontFamily: '"Josefin Sans", sans-serif' }}>
                info@snmseafoods.com
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 4,
                lineHeight: 1.8,
                fontFamily: '"Josefin Sans", sans-serif',
              }}
            >
              Operating Hours: Daily 5:00 AM - 8:00 PM (Fresh morning auction cuts available from 6:00 AM).
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{
              p: 4.5,
              borderRadius: 3,
              bgcolor: '#FFFFFF',
              border: '2px solid rgba(211, 188, 120, 0.4)',
              boxShadow: '0 8px 25px rgba(16, 43, 73, 0.05)',
            }}
          >
            {submitted ? (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                Thank you! Your message has been received. Our team will get back to you shortly.
              </Alert>
            ) : null}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField
                required
                label="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
              />
              <TextField
                required
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                fullWidth
              />
              <TextField
                required
                multiline
                rows={4}
                label="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 1.4,
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.04em',
                  borderRadius: '50px',
                  bgcolor: '#102B49',
                  color: '#FFFFFF',
                  '&:hover': {
                    bgcolor: '#D3BC78',
                    color: '#102B49',
                  },
                }}
              >
                Send Message +
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
