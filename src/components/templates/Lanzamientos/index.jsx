import React from "react";
import { Grid2, Box, Typography, CardMedia, Card, CardContent, CardActionArea   } from "@mui/material";

export const Lanzamiento = () => {
  return (
    <>
      <Typography variant="h2" fontWeight="bold" sx={{ textAlign: "center"}}>
        Nuevos Lanzamientos
      </Typography>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
              Air Jordan
            </Typography>
            <CardMedia>
            <img
              src="/lanzamiento1.png"
              alt="Lanzamiento 1"
              style={{ width: "320px", height: "600px", objectFit: "cover" }
            }
            />
            </CardMedia>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
              Adidas
            </Typography>
            <img
              src="/lanzamiento2.png"
              alt="Lanzamiento 2"
              style={{ width: "320px", height: "600px", objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
              Nike
            </Typography>
            <img
              src="/lanzamiento3.png"
              alt="Lanzamiento 3"
              style={{ width: "320px", height: "600px", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
