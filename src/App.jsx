import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Services from './pages/Services'
import CustomOrders from './pages/CustomOrders'
import Contact from './pages/Contact'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  )
}

export default App
