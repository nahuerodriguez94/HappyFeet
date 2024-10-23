import React from "react";

const Portada = () => {
  return (
    <div>
      <video 
        width="600"
        autoPlay
        muted
        loop
        style={{ width: '100%',height: 720, objectFit: "cover", marginTop: 0 }}
      >
        <source src="/videoPortada.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default Portada;
