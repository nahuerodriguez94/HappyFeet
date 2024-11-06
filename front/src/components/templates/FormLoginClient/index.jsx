import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Grid2 from "@mui/material/Grid2";
import { RegistroCliente } from "../RegistroCliente"; // Importa el formulario de registro
import { obtenerClientes } from "../../../Servicios/client.services";

export const FormLoginClient = ({ setUserClient }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const handleSubmitClient = async () => {
    if (username === "" || password === "") {
      setError(true);
      return;
    }

    try {
      // Pasar username y password directamente como parámetros
      const clientExists = await obtenerClientes(username, password);
      if (clientExists) {
        alert("Bienvenido a Happy Feet");
        setUserClient(username);
        localStorage.setItem("userClient", JSON.stringify({ username, role: "client" }));
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error("Error al consultar el cliente:", err);
    }
  };

  const handleLogoutClient = () => {
    localStorage.removeItem("userClient"); // Elimina el usuario del almacenamiento local
    setUserClient(null); // Restablece el estado del usuario
    setUsername("");
    setPassword("");
    alert("Has cerrado sesión");
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering); // Alterna entre login y registro
  };

  return (
    <>
      {isRegistering ? (
        <>
          <RegistroCliente />
          <Button 
            type="link" 
            onClick={toggleRegister} 
            style={{ display: "block", margin: "10px auto", color: "blue" }}
          >
            ¿Ya tienes cuenta? Inicia sesión
          </Button>
        </>
      ) : (
        <Form
          name="FormLoginClient"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmitClient}
          autoComplete="off"
        >
          <Form.Item
            label="Nombre de Usuario"
            name="username"
            rules={[{ required: true, message: "Por favor ingresa tu nombre de usuario!" }]}
          >
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Por favor ingresa tu contraseña!" }]}
          >
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Grid2 container spacing={2} sx={{ ml: "auto", mr: 5, alignItems: "center" }}>
              <Button type="primary" htmlType="submit">
                Iniciar sesión
              </Button>
              <Button type="default" onClick={handleLogoutClient}>
                Cerrar Sesión
              </Button>
            </Grid2>
          </Form.Item>

          {error && <p style={{ color: "red", textAlign: "center" }}> Usuario o contraseña incorrectos </p>}

          <Button 
            type="link" 
            onClick={toggleRegister} 
            style={{ display: "block", margin: "10px auto", color: "blue" }}
          >
            Crear cuenta
          </Button>
        </Form>
      )}
    </>
  );
};
