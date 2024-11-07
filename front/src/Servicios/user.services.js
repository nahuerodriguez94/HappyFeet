import axios from "axios";


export const loginUser = async (username, password) => {
  try {
    const response = await axios.get("http://localhost:3000/user", {
      params: { username, password }, // Cambia aquí
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener admin:", error);
    throw error; // Lanza el error para manejarlo en la parte que llama a esta función
  }
};
