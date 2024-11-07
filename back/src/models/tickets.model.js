const { sequelize } = require("../db/db.js");
const { DataTypes } = require("sequelize");

const Ticket = sequelize.define(
  "ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    cart: {
        type: DataTypes.JSON,
        defaultValue: [],
        allowNull: false,
    }
  },
  { timestamps: false }
);

module.exports = { Ticket };