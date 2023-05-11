const express = require("express");
const { validateInput } = require("../middlewares/auth");
const { handleRegister } = require("../controllers/user");

const router = express.Router();
router.use(express.json());

router.post("/register", validateInput, handleRegister);

module.exports = router;
