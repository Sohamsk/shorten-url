async function handleRegister(req, res) {
  res.send(JSON.stringify({ status: "sucess", code: 01 }));
}

async function handleLogin() {}

module.exports = {
  handleRegister,
  handleLogin,
};
