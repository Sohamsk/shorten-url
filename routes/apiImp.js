const express = require("express");
const router = express.Router();

let regmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

router.post("/register",async (req, res) => {
    try {
        let email = req.query.email;    // queries used for testing
        // let email = req.body.email;
        if (email.length == 0 || !regmail.test(email)) {
            throw e;
        }

        // implement a function to send data to a database






        res.send(JSON.stringify({status : "sucess",code: 01}));
    } catch (e) {
        console.log("failed request");
        res.send(JSON.stringify({status : "failure",code: 02}));
    }
});

module.exports = router;