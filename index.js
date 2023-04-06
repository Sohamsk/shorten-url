const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.use(express.json())


app.get("/", (req, res) => {
    res.sendFile("./static/index.html", { root: __dirname });
});

const routes = require("./routes/apiImp");
app.use(routes);

app.listen(PORT, (e) => {
    console.log(`Server started at http://localhost:${PORT}`);
});
