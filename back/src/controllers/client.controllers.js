const { Client } = require("../models/client.model.js");
const { Sequelize } = require("sequelize");

// Crear Clientes
const createClient = async (req, res) => {
  const body = req.body;

  try {
    const response = await Client.create(body);
    res.status(200).json({
      status: "Success",
      message: `Cliente ID: ${response.id} creado`,
    });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

// Actualizar Clientes
const updateClient = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const response = await Client.update(body, { where: { id: id } });

    if (response[0])
      return res
        .status(200)
        .json({ status: "success", message: "Cliente actualizado" });
    res
      .status(400)
      .json({ status: "warning", message: "No se actualizado el Cliente" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrio un error al intentar actualizar el Cliente",
    });
  }
};

module.exports = {
  createClient,
  updateClient,
};
