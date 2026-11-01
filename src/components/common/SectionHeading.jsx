import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <Box sx={{ mb: 5, textAlign: align }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 700,
          color: '#102B49',
          mb: 1.5,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 50,
          height: 3,
          backgroundColor: '#D3BC78',
          mx: align === 'center' ? 'auto' : 0,
          mb: 2,
          borderRadius: 1,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Josefin Sans", sans-serif',
            color: '#263746',
            maxWidth: 620,
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}

export default SectionHeading
