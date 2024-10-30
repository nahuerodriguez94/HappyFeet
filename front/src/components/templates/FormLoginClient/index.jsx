import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Grid2 from "@mui/material/Grid2";

export const FormLoginClient = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      setError(true);
      return;
    }

    setError(false);

    if (username === "Marcos" && password === "1234") {
      alert("Bienvenido a Happy Feet");
      setUser("Marcos");
      localStorage.setItem("user", JSON.stringify({ username: "Marcos", role: "client" }));
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    // Borrar localStorage y restablecer estado de usuario
    localStorage.removeItem("user");
    setUser(null);
    setUsername("");
    setPassword("");
    alert("Has cerrado sesión");
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Grid2 container spacing={2} sx={{ ml: "auto", mr: 5, alignItems: "center" }}>
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
          <Button type="primary" htmlType="submit">
            Crear Cuenta
          </Button>
          <Button type="default" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Grid2>
      </Form.Item>
      {error && <p style={{ color: "red", textAlign: "center" }}> Usuario o contraseña incorrectos </p>}
    </Form>
  );
};
