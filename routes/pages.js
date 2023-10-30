const express = require("express");
const checkLogin = require("../middlewares/checkLogin");
const { ledger } = require("../models/ledger");
const { getUser } = require("../services/auth");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/generate", checkLogin, async (req, res) => {
  const user = getUser(req.cookies.uuid);
  const allUrls = await ledger.findAll({
    where: {
      userid: user,
    },
  });
  res.render("generate", { urls: allUrls });
});

module.exports = router;
