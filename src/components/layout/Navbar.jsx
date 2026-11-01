import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'SERVICES', path: '/services' },
  { label: 'CUSTOM ORDERS', path: '/custom-orders' },
  { label: 'CONTACT', path: '/contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 8 : 0}
        sx={{
          backgroundColor: '#102B49', // Primary Deep Navy Blue
          height: { xs: 75, md: 90 },
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid rgba(211, 188, 120, 0.2)', // Luxury Gold accent border
          boxShadow: scrolled ? '0 10px 30px rgba(10, 29, 51, 0.5)' : 'none',
          top: 0,
          zIndex: 1100,
          overflow: 'visible',
        }}
      >
        {/* Restfolio signature bottom-left skew tab accent */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'block' },
            position: 'absolute',
            top: '100%',
            left: 0,
            width: 200,
            height: 18,
            backgroundColor: '#102B49',
            transform: 'skewX(-55deg)',
            transformOrigin: 'top left',
            borderRight: '1px solid #D3BC78',
            borderBottom: '1px solid rgba(211, 188, 120, 0.3)',
            boxShadow: '0 4px 12px rgba(10, 29, 51, 0.35)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: { xs: 75, md: 90 },
            }}
          >
            {/* Logo Area */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: '#FFFFFF',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Seafood Brand Icon */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: 'rgba(211, 188, 120, 0.15)',
                  border: '1.5px solid #D3BC78',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D3BC78',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#D3BC78',
                    color: '#102B49',
                    transform: 'rotate(-5deg) scale(1.05)',
                  },
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
                  <path d="M18 12c-.5 0-1-.5-1-1" />
                  <path d="M2 12c1.5 2 3.5 3.5 6 3.5" />
                  <path d="M2 12c1.5-2 3.5-3.5 6-3.5" />
                </svg>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                  }}
                >
                  SNM <Box component="span" sx={{ color: '#D3BC78' }}>SEAFOODS</Box>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontFamily: '"Josefin Sans", sans-serif',
                    fontSize: '0.68rem',
                    letterSpacing: '0.22em',
                    color: '#D3BC78',
                    textTransform: 'uppercase',
                    opacity: 0.85,
                  }}
                >
                  Fresh Catch & Wholesale
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 2.5, lg: 4 },
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Box
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: isActive ? '#D3BC78' : 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      position: 'relative',
                      py: 1,
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#D3BC78',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '18px',
                        height: '2px',
                        borderRadius: '2px',
                        backgroundColor: '#D3BC78',
                        transition: 'transform 0.25s ease',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                )
              })}
            </Box>

            {/* Right Side Actions: Social Icons + Luxury Gold Button */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 2,
              }}
            >
              {/* Social Icons */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="Instagram"
                  sx={{
                    color: '#D3BC78',
                    opacity: 0.8,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#FFFFFF',
                      opacity: 1,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="Facebook"
                  sx={{
                    color: '#D3BC78',
                    opacity: 0.8,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#FFFFFF',
                      opacity: 1,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="WhatsApp"
                  sx={{
                    color: '#D3BC78',
                    opacity: 0.8,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#FFFFFF',
                      opacity: 1,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>

              {/* Luxury Gold Pill CTA Button */}
              <Button
                component={RouterLink}
                to="/custom-orders"
                variant="contained"
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'capitalize',
                  backgroundColor: '#D3BC78',
                  color: '#102B49',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.25,
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#102B49',
                    border: '1px solid #D3BC78',
                    boxShadow: '0 8px 22px rgba(211, 188, 120, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Order Fresh Catch +
              </Button>
            </Box>

            {/* Mobile Menu Toggle Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <Button
                component={RouterLink}
                to="/custom-orders"
                size="small"
                variant="contained"
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  backgroundColor: '#D3BC78',
                  color: '#102B49',
                  borderRadius: '50px',
                  px: 1.8,
                  py: 0.7,
                  '&:hover': { backgroundColor: '#B89F56' },
                }}
              >
                Order +
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{
                  color: '#D3BC78',
                  border: '1px solid rgba(211, 188, 120, 0.3)',
                  borderRadius: 1.5,
                  p: 0.8,
                  '&:hover': {
                    color: '#FFFFFF',
                    borderColor: '#D3BC78',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 290,
            backgroundColor: '#102B49',
            color: '#FFFFFF',
            borderLeft: '1px solid rgba(211, 188, 120, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 3,
          },
        }}
      >
        <Box>
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pb: 2.5,
              borderBottom: '1px solid rgba(211, 188, 120, 0.2)',
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#FFFFFF',
                  fontSize: '1.25rem',
                }}
              >
                SNM <Box component="span" sx={{ color: '#D3BC78' }}>SEAFOODS</Box>
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"Josefin Sans", sans-serif',
                  color: '#D3BC78',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Fresh Catch
              </Typography>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: '#D3BC78', '&:hover': { color: '#FFFFFF' } }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List sx={{ pt: 2 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={RouterLink}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      borderRadius: 1.5,
                      py: 1.2,
                      px: 2,
                      backgroundColor: isActive ? 'rgba(211, 188, 120, 0.15)' : 'transparent',
                      borderLeft: isActive ? '3px solid #D3BC78' : '3px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(211, 188, 120, 0.1)',
                        '& .MuiListItemText-primary': {
                          color: '#D3BC78',
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: '16px',
                        letterSpacing: '0.06em',
                        color: isActive ? '#D3BC78' : '#FFFFFF',
                        fontWeight: isActive ? 600 : 400,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>

        {/* Drawer Footer Actions */}
        <Box sx={{ pt: 3, borderTop: '1px solid rgba(211, 188, 120, 0.2)' }}>
          <Button
            component={RouterLink}
            to="/custom-orders"
            onClick={handleDrawerToggle}
            fullWidth
            variant="contained"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: '#D3BC78',
              color: '#102B49',
              borderRadius: '50px',
              py: 1.4,
              mb: 2.5,
              '&:hover': {
                backgroundColor: '#B89F56',
              },
            }}
          >
            Order Fresh Catch +
          </Button>

          {/* Social Icons in Drawer */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              size="small"
              sx={{ color: '#D3BC78', '&:hover': { color: '#FFFFFF' } }}
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              size="small"
              sx={{ color: '#D3BC78', '&:hover': { color: '#FFFFFF' } }}
            >
              <FacebookIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/919876543210"
              target="_blank"
              size="small"
              sx={{ color: '#D3BC78', '&:hover': { color: '#FFFFFF' } }}
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
