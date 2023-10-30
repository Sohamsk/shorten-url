const { v4: uuidv4 } = require("uuid");
const { userLogin } = require("../models/userlogin");
const { setUser, getUser } = require("../services/auth");

async function handleRegister(req, res) {
  userLogin
    .create({
      id: req.body.email,
      pword: req.body.password,
    })
    .then(() => {
      res.send(JSON.stringify({ status: "sucess", code: 1 }));
    })
    .catch((error) => {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.send(JSON.stringify({ status: "failure", code: 3 }));
      }
    });
}

async function handleLogin(req, res) {
  const resp = await userLogin.findOne({
    where: { id: req.body.email, pword: req.body.password },
  });

  if (resp) {
    const id = uuidv4();

    if (!getUser(id)) {
      setUser(id, req.body.email);
      res.cookie("uuid", id);
    }
    res.send(JSON.stringify({ code: 1 }));
  } else {
    res.status(401);
    res.send(JSON.stringify({ status: "login failed", code: 2 }));
  }
}

module.exports = {
  handleRegister,
  handleLogin,
};
