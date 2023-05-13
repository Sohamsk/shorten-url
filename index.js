const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
  res.render("index");
});

const userRoutes = require("./routes/user");
app.use("/v1/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
