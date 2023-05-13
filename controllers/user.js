const { userLogin } = require("../models/userlogin");

async function handleRegister(req, res) {
  const reg = await userLogin.create({id: req.body.email, pword: req.body.password})
  res.send(JSON.stringify({ status: "sucess", code: 01 }));
}

async function handleLogin() {}

module.exports = {
  handleRegister,
  handleLogin,
};
