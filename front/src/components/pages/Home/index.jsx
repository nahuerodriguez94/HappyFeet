import React from "react";
import Portada from "../../templates/Portada";
import { Lanzamiento } from "../../templates/Lanzamientos";
import { CarouselHome } from "../../templates/CarouselHome";
import { Presentacion } from "../../templates/Presentacion";
import { Ventas } from "../../templates/Ventas";




export const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Lanzamiento />
      <CarouselHome />
      <Ventas></Ventas>
    </>
  );
};
