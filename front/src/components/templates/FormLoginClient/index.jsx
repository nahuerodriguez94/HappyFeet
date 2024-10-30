import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Grid2 from "@mui/material/Grid2";
import { RegistroCliente } from "../RegistroCliente"; // Importa el formulario de registro

export const FormLoginClient = ({ setUserClient }) => {
  const [usernameClient, setUsernameClient] = useState("");
  const [passwordClient, setPasswordClient] = useState("");
  const [error, setError] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const handleSubmitClient = () => {
    if (usernameClient === "" || passwordClient === "") {
      setError(true);
      return;
    }

    setError(false);

    if (usernameClient === "Marcos" && passwordClient === "1234") {
      alert("Bienvenido a Happy Feet");
      setUserClient("Marcos");
      localStorage.setItem("userClient", JSON.stringify({ usernameClient: "Marcos", role: "client" }));
    } else {
      setError(true);
    }
  };

  const handleLogoutClient = () => {
    localStorage.removeItem("userClient");
    setUserClient(null);
    setUsernameClient("");
    setPasswordClient("");
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
            name="usernameClient"
            rules={[{ required: true, message: "Por favor ingresa tu nombre de usuario!" }]}
          >
            <Input value={usernameClient} onChange={(e) => setUsernameClient(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="passwordClient"
            rules={[{ required: true, message: "Por favor ingresa tu contraseña!" }]}
          >
            <Input.Password value={passwordClient} onChange={(e) => setPasswordClient(e.target.value)} />
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
