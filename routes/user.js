const express = require("express");
const { validateInput } = require("../middlewares/validation");
const { handleRegister, handleLogin } = require("../controllers/user");

const router = express.Router();
router.use(express.json());

router.post("/register", validateInput, handleRegister);
router.post("/login", validateInput, handleLogin);

module.exports = router;
