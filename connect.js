const { Sequelize } = require("sequelize");

const db = new Sequelize("mydb", "USER", "CReVabroD5swEchu@uW$", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
