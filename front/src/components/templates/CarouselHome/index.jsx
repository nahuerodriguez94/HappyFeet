import React from "react";
import { Typography } from "@mui/material";
import { Carousel } from "antd";

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80%',
};

export const CarouselHome = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <img src="./tarjeta1.png" alt="Tarjeta 1" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
    </div>
    <div style={contentStyle}>
      <img src="./tarjeta2.png" alt="Tarjeta 2" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
    </div>
    <div style={contentStyle}>
      <img src="./tarjeta3.png" alt="Tarjeta 3" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
    </div>
    <div style={contentStyle}>
      <img src="./tarjeta4.png" alt="Tarjeta 4" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
    </div>
  
  </Carousel>
);
