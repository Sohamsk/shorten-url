const { getUser } = require("../services/auth");

function checkLogin(req, res, next) {
  const id = getUser(req.cookies.uuid);
  if (typeof id === "undefined") res.redirect("/");
  else next();
}

module.exports = checkLogin;
