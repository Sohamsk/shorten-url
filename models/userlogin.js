const { DataTypes } = require("sequelize");
const db = require("./connect");

const userLogin = db.define(
  "userlogin",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    pword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  userLogin,
};
