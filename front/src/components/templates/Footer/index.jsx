import React from 'react';
import { Box, Typography, Link, Grid2, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '40px 20px',
        marginTop: '20px',
      }}
    >
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Sobre Happy Feet
          </Typography>
          <Typography variant="body2">
            Happy Feet es su destino para ropa deportiva de alta calidad y estilo. Nos dedicamos a ofrecer productos que no solo lucen bien, sino que también son cómodos y funcionales.
          </Typography>
        </Grid2>
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Enlaces Rápidos
          </Typography>
          <Link href="/tienda" color="inherit" underline="hover" sx={{ display: 'block' }}>
            Tienda
          </Link>
          <Link href="/contacto" color="inherit" underline="hover" sx={{ display: 'block' }}>
            Contacto
          </Link>
        </Grid2>
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Síguenos
          </Typography>
          <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
        </Grid2>
      </Grid2>
      <Box textAlign="center" sx={{ marginTop: '20px' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Happy Feet. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};


