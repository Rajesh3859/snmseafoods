import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import SectionHeading from '../components/common/SectionHeading'

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeading
        title="About SNM Seafoods"
        subtitle="Dedicated to ocean-fresh, responsibly harvested seafood directly from the coastal harbor"
      />
      <Grid container spacing={5} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              mb: 2.5,
              color: '#102B49',
            }}
          >
            Our Legacy & Coastal Story
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: '"Josefin Sans", sans-serif',
              color: '#263746',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            SNM Seafoods was founded with a singular purpose: connecting consumers and businesses directly to fresh marine harvests while preserving ocean freshness. With decades of fishing heritage and harbor-side processing experience, we maintain stringent temperature and hygiene controls.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Josefin Sans", sans-serif',
              color: '#263746',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Every batch of fish, prawns, and crabs is carefully inspected by our seafood experts to ensure zero chemical additives, preservatives, or artificial glazes.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4.5,
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
                mb: 2.5,
                color: '#D3BC78',
                letterSpacing: '0.04em',
              }}
            >
              Our Quality Promise
            </Typography>
            {[
              '100% Sourced daily from local coastal harbors',
              'Zero formalin, ammonia, or preservative treatments',
              'Hygienic, temperature-controlled butchery and cleaning',
              'Direct cold-chain supply for maximum freshness',
            ].map((text) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="span" sx={{ color: '#D3BC78', mr: 1.5, fontWeight: 700, fontSize: '1.2rem' }}>
                  ✓
                </Box>
                <Typography variant="body1" sx={{ color: '#FFFFFF', fontFamily: '"Josefin Sans", sans-serif' }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
