import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#47667b",
        },
        secondary: {
          main: "#6d8b89",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
