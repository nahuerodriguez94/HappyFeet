import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const CardProduct = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: "300px", m: 2 }}>
        <CardMedia
          sx={{ height: 250 }}
          image= {product.image}
          title="green iguana"
        />

        <CardContent>
        <img
              src="/lanzamiento1.png"
              alt="Lanzamiento 1"
              style={{ width: "400px", height: "400px", objectFit: "contain"}
            }
            />
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
            <Typography>
             U$S {product.price}
            </Typography>

        </CardContent>

        <CardActions>
          <Button size="small" variant="outlined" color="secondary">
            Comprar
          </Button>
          <Button size="small" variant="contained">
            Agregar al Carrito
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

