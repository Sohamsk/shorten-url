const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile("./static/index.html", { root: __dirname });
});

app.post("/register",async (req, res) => {
    console.log("email: ",req.body.email," \npassword: ",req.body.password);
    try {
        let email = req.body.email;
        if (email.length == 0) {
            throw e;
        }
        res.send(JSON.stringify({status : "sucess",code: 01}));
    } catch (e) {
        res.send(JSON.stringify({status : "failure",code: 02}));
    }
})


app.listen(PORT, (e) => {
    console.log(`Server started at http://localhost:${PORT}`);
});
