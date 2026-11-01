import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#102B49", // Deep Navy Blue
      dark: "#0A1D33",
      light: "#1D416D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D3BC78", // Luxury Gold
      dark: "#B89F56",
      light: "#E4D4A4",
      contrastText: "#102B49",
    },
    background: {
      default: "#F5F2E9", // Warm Ivory
      paper: "#FFFFFF",   // White
    },
    text: {
      primary: "#263746",   // Charcoal Blue
      secondary: "#536575",
    },
    divider: "rgba(16, 43, 73, 0.12)",
  },

  typography: {
    fontFamily: '"Josefin Sans", sans-serif',

    h1: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.02em",
      color: "#102B49",
    },
    h2: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.02em",
      color: "#102B49",
    },
    h3: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.01em",
      color: "#102B49",
    },
    h4: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      color: "#102B49",
    },
    h5: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      color: "#102B49",
    },
    h6: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      color: "#102B49",
    },
    body1: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "#263746",
    },
    body2: {
      fontFamily: '"Josefin Sans", sans-serif',
      lineHeight: 1.6,
      color: "#263746",
    },
    button: {
      fontFamily: '"Josefin Sans", sans-serif',
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 22px",
          fontWeight: 600,
        },
        containedSecondary: {
          backgroundColor: "#D3BC78",
          color: "#102B49",
          "&:hover": {
            backgroundColor: "#B89F56",
          },
        },
        containedPrimary: {
          backgroundColor: "#102B49",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1D416D",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(211, 188, 120, 0.2)",
          boxShadow: "0 4px 18px rgba(16, 43, 73, 0.06)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
