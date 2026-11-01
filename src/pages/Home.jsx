import Box from '@mui/material/Box'
import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import FeaturedProducts from '../components/home/FeaturedProducts'
import ServicesPreview from '../components/home/ServicesPreview'
import ContactCTA from '../components/home/ContactCTA'

function Home() {
  return (
    <Box>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <ServicesPreview />
      <ContactCTA />
    </Box>
  )
}

export default Home

