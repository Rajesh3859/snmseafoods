import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function WhatsAppButton({ phoneNumber = '919876543210', message = 'Hello SNM Seafoods, I would like to place an order.' }) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Fab
      color="success"
      aria-label="chat on whatsapp"
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1200,
        backgroundColor: '#25D366',
        '&:hover': {
          backgroundColor: '#1EBE5D',
        },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  )
}

export default WhatsAppButton

