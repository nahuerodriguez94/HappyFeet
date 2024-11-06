import React, { useContext } from "react";
import { CartContext } from "../../../Servicios/CartContext/CartContext";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export const CardProduct = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
   <Box      sx={{
    transition: 'transform 0.4s, filter 0.4s', // Transición de escala y brillo
    '&:hover': {
      transform: 'scale(1.05)', // Agranda el producto en un 5%
      filter: 'brightness(0.8)', // Oscurece el producto al 80%
    },
  }}
>
    <Card  sx={{ maxWidth: "400px", m: 10 }}>
  <CardMedia
    component="img" // Renderiza como una imagen
    image={"http://localhost:3000/" + product.image}
    title={product.name}
    sx={{
      height: "200px",
      width: "400px",
      objectFit: "contain" // Aplica objectFit al image
    }}
  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography>U$S {product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" onClick={() => addToCart(product)}>
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
};
