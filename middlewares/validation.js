async function validateInput(req, res, next) {
  let regmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let email = req.body.email;

  if (email.length == 0 || !regmail.test(email)) {
    res.send(JSON.stringify({ status: "failure", code: 02 }));
  } else next();
}

module.exports = {
  validateInput,
};
