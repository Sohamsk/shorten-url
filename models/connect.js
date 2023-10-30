const { Sequelize } = require("sequelize");

const db = new Sequelize("mydb", "postgres", "soham2003", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
async function testdb() {
  try {
    await db.authenticate();
    console.log("Connection success");
  } catch (error) {
    console.log(error);
    console.log("connection failed");
  }
}
testdb();
module.exports = db;
