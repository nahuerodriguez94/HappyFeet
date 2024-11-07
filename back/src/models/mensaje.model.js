const { sequelize } = require("../db/db.js");
const { DataTypes } = require("sequelize");

const Mensaje = sequelize.define("Mensaje", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Mensaje;
