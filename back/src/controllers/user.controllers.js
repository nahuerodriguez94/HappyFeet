const {User} = require("../models/user.model.js");
const { Sequelize } = require("sequelize");


const loginUser = async (req, res) => {
  const { username, password } = req.query;

  try {
    // Busca el cliente en la base de datos
    const user = await User.findOne({ where: { username } });

    // Si el cliente no existe o la contraseña no coincide, retorna un error de autenticación
    if (!user || user.password !== password) {
      return res.status(401).json({ status: "failure", message: "Usuario o contraseña incorrectos" });
    }

    // Si las credenciales son correctas, retorna el cliente
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};


  module.exports = {
    loginUser
  };
