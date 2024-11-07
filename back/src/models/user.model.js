const { sequelize } = require("../db/db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
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
    // role: {
    //   type: DataTypes.ENUM("admin", "employee"),
    //   allowNull: false,
    //   defaultValue: "employee",
    // },
  },
  { timestamps: false }
);

module.exports = { User };
