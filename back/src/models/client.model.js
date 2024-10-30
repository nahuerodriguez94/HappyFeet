const { sequelize } = require("../db/db.js");
const { DataTypes } = require("sequelize");
const { Ticket } = require("./tickets.model.js");

const Client= sequelize.define(
  "client",
  {
    // Datos de log in
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Datos de contacto
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validación de formato de email
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isNumeric: true, // Solo permite números
        len: [10, 10], // Debe tener 10 dígitos
      },
    },

    // Datos de domicilio
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
Client.hasMany(Ticket, { foreignKey: 'clientId'})
module.exports = { Client };
