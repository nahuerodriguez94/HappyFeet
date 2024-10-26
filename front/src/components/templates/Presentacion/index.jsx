import React from "react";
import { Typography, Container, Box } from "@mui/material";

export const Presentacion = () => {
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }} >
      <Typography variant="h1" gutterBottom fontWeight="bold" >
        Bienvenido a Happy Feet
      </Typography>
      <Typography variant="body1" gutterBottom>
        El deporte nos mantiene en forma. Te mantiene atento. Nos une. A través
        del deporte podemos cambiar vidas. Ya sea a través de historias de
        atletas inspiradores. Animándote a ponerte en marcha. Ofreciéndote
        artículos deportivos con las últimas tecnologías para mejorar tu
        rendimiento. Superá tu mejor marca personal. Happy Feet es el hogar del
        corredor, del jugador de básquet, del joven futbolista y del entusiasta
        del fitness. Del aventurero que escapa de la ciudad los fines de semana.
        De la instructora de yoga que enseña nuevas posturas. En el escenario, en los festivales. Nuestra
        ropa deportiva para mujer y para hombre te mantiene concentrado antes de
        que suene el silbato. Durante la carrera. Y en la línea de meta.
        Apoyamos a los creadores. Estamos aquí para apoyar a los creadores. Sus
        vidas. Y cambiar el mundo. Happy Feet es mucho más que ropa deportiva y ropa
        de entrenamiento. Nos asociamos con los mejores de la industria para
        co-crear. De esta manera, ofrecemos a nuestras seguidores la ropa
        deportiva y los estilos que mejor se adaptan a sus necesidades
        deportivas, sin dejar de lado la sostenibilidad. Apoyamos a los
        creadores Mejorar su juego. Creamos el cambio. Y pensamos en el impacto
        que tenemos en nuestro mundo
      </Typography>
      <Box
      display="flex" 
        justifyContent="center" 
        alignItems="center"
        style={{ width: "100%" }} // Esto asegura que el Box ocupe todo el ancho del Container
      >
      <img src="/logo.png" alt="logo"  style={{
                    width: "400px",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    alignItems: "center",
                  }}/>
                  </Box>
    </Container>
  );
};
