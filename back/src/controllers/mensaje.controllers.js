const Mensaje = require("../models/mensaje.model.js");

const agregarMensaje = async (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body;
    const nuevoMensaje = await Mensaje.create({ nombre, correo, mensaje });
    res.status(201).json({ mensaje: "Mensaje guardado correctamente", data: nuevoMensaje });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al guardar el mensaje" });
  }
};

module.exports = { agregarMensaje };
