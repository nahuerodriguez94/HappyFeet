import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

export const Lanzamiento = () => {
  const productos = [
    { nombre: "Air Jordan", imagen: "/lanzamiento1.png" },
    { nombre: "Adidas", imagen: "/lanzamiento2.png" },
    { nombre: "Nike", imagen: "/lanzamiento3.png" },
  ];

  return (
    <>
      <Typography variant="h2" fontWeight="bold" sx={{ textAlign: "center", mb: 4 }}>
        Nuevos Lanzamientos
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          justifyItems: "center",
        }}
      >
        {productos.map((producto, index) => (
          <Card
            key={index}
            sx={{
              Width: 320,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                src={producto.imagen}
                alt={producto.nombre}
                sx={{
                  height: 800,
                  width: 450,
                  objectFit: "cover",
                  filter: "brightness(0.9)",
                  transition: "filter 0.3s",
                  "&:hover": {
                    filter: "brightness(1.1)",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                  {producto.nombre}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};
