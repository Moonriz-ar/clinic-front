// A custom theme for this app
import { createTheme } from '@mui/material/styles';

// BACKEND: aca pueden cambiar el color principal si tienen ganas, en la linea 7
const theme = createTheme({
  palette: {
    primary: {
      main: '#76BA99',
    },
    secondary: {
      main: '#CED89E',
    },
  },
});

export default theme;
