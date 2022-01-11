import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: [
      'Atkinson Hyperlegible', 
      'sans-serif'
    ].join(',')
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