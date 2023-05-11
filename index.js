const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const { Sequelize } = require("sequelize");

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const sequelize = new Sequelize("mydb", "USER", "CReVabroD5swEchu@uW$", {
  host: "localhost",
  dialect: "mysql",
});

app.get("/", async (req, res) => {
  res.render("index", { root: __dirname });
  // try {
  //   await sequelize.authenticate();
  //   console.log("Connection has been established successfully.");
  //   res.send(
  //     JSON.stringify({
  //       result: "Connection has been established successfully.",
  //     })
  //   );
  // } catch (error) {
  //   console.error("Unable to connect to the database:", error);
  //   res.send(JSON.stringify({ result: "Unable to connect to the database:" }));
  // }
});

const userRoutes = require("./routes/user");
app.use("/v1/", userRoutes);

app.listen(PORT, (e) => {
  console.log(`Server started at http://localhost:${PORT}`);
});
