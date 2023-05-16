const express = require("express");
const { generateID, displayPage } = require("../controllers/url");

const router = express.Router();
router.use(express.json());

router.post("/generate", generateID);
router.get("/:id", displayPage);

module.exports = router;
