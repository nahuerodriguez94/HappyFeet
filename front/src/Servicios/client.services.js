import axios from "axios";

export const createClient = async (body) => {
  const response = await axios.post("http://localhost:3000/cliente", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const obtenerClientes = async (username, password) => {
  try {
    const response = await axios.get("http://localhost:3000/cliente", {
      params: { username, password }, // Cambia aquí
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    throw error; // Lanza el error para manejarlo en la parte que llama a esta función
  }
};


