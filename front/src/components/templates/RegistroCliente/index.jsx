import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { createClient } from "../../../Servicios/client.services";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export const RegistroCliente = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Datos del formulario:", values);
    try {
      const response = await createClient(values)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
 
  };
  useEffect(() => {
  
  }, [] );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="RegistroCliente"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      {/* Nombre de Cliente */}
      <Form.Item
        name="username"
        label="Nombre de Cliente"
        rules={[{ required: true, message: "Por favor ingrese su nombre" }]}
      >
        <Input placeholder="Nombre de Cliente" />
      </Form.Item>

      {/* Contraseña */}
      <Form.Item
        name="password"
        label="Contraseña"
        rules={[{ required: true, message: "Por favor ingrese su contraseña" }]}
        hasFeedback
      >
        <Input.Password placeholder="Contraseña" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Contraseña"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Por favor confirme su contraseña" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Las contraseñas no coinciden"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirmar Contraseña" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { type: "email", message: "Por favor ingrese un correo válido" },
          { required: true, message: "Por favor ingrese su email" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      {/* Dirección */}
      <Form.Item
        name="address"
        label="Dirección"
        rules={[{ required: true, message: "Por favor ingrese su dirección" }]}
      >
        <Input placeholder="Dirección" />
      </Form.Item>

      {/* Teléfono */}
      <Form.Item
        name="phone"
        label="Teléfono"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su número de teléfono",
          },
        ]}
      >
        <Input placeholder="Teléfono" style={{ width: "100%" }} />
      </Form.Item>

      {/* Botón de registro */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
};
