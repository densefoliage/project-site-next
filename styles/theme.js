import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: [
      'Atkinson Hyperlegible', 
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '3rem',
      lineHeight: 2
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#141419',
      paper: '#141419'
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;