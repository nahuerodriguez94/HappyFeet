import axios from "axios";

export const createClient = async (body) => {
  const response = await axios.post("http://localhost:3000/cliente", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data
};

