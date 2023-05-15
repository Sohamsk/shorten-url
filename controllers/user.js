const { userLogin } = require("../models/userlogin");

async function handleRegister(req, res) {
  try {
    const reg = await userLogin.create({
      id: req.body.email,
      pword: req.body.password,
    });
    res.send(JSON.stringify({ status: "sucess", code: 01 }));
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.send(JSON.stringify({ status: "failure", code: 03 }));
    }
  }
}

async function handleLogin(req, res) {
  const resp = await userLogin.findOne({
    where: { id: req.body.email, pword: req.body.password },
  });

  if (resp) {
    res.send(JSON.stringify({ status: "login Successfull", code: 01 }));
  } else res.send(JSON.stringify({ status: "login failed", code: 02 }));
}

module.exports = {
  handleRegister,
  handleLogin,
};
