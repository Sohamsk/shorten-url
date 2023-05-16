const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(cookieParser());
const pages = require("./routes/pages");
app.use("/", pages);

const userRoutes = require("./routes/user");
app.use("/v1/", userRoutes);

const urlRoutes = require("./routes/url");
app.use("/url/", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
