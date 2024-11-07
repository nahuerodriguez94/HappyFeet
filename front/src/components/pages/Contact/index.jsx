import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);

  const handleEnviar = async (e) => {
    e.preventDefault();
    setExito(false);
    setError(false);

    try {
      await axios.post("http://localhost:3000/contacto", { nombre, correo, mensaje });
      setExito(true);
      setNombre("");
      setCorreo("");
      setMensaje("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 20, marginBottom: 30 }}>
      <Typography variant="h4" gutterBottom>Contáctanos</Typography>
      <Box component="form" onSubmit={handleEnviar} noValidate sx={{ mt: 1 }}>
        <TextField
          fullWidth
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Enviar Mensaje
        </Button>
        {exito && <Typography color="green" sx={{ mt: 2 }}>¡Mensaje enviado exitosamente!</Typography>}
        {error && <Typography color="red" sx={{ mt: 2 }}>Error al enviar el mensaje.</Typography>}
      </Box>
    </Container>
  );
};
