const express = require("express");
const router = express.Router();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db1',
    password: 'soham1234',
    port: 5432,
});

let regmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

router.post("/register",async (req, res) => {
    try {
        // let email = req.query.email;    // queries used for testing
        let email = req.body.email;
        if (email.length == 0 || !regmail.test(email)) {
            throw e;
        }
        // implement a function to send data to a database
        pool.query(`INSERT INTO login VALUES('${email}','${req.body.password}')`);  // maybe prone to sql injection
        res.send(JSON.stringify({status : "sucess",code: 01}));
    } 
    catch (e) {
        console.log("failed request");
        res.send(JSON.stringify({status : "failure",code: 02}));
    }
});

module.exports = router;