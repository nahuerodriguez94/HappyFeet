const { sequelize } = require("../db/db.js");
const { DataTypes } = require("sequelize");

const Cart = sequelize.define("Cart", {
  clientName: {
    type: DataTypes.STRING,  // Cambiado a STRING para almacenar solo el nombre
    allowNull: false,
  },
  products: {
    type: DataTypes.JSON,    // Cambiado a JSON para almacenar un array de objetos
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ticketNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
   
  module.exports = { Cart } ;