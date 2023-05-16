const { ledger } = require("../models/ledger");
const { nanoid } = require("nanoid");
const { getUser } = require("../services/auth");

function generateID(req, res) {
  if (!req.body.url) {
    res.send(JSON.stringify({ status: "failed", code: 02 }));
    return;
  }
  const eid = nanoid(8);
  ledger.create({
    entryId: eid,
    userId: getUser(req.body.id),
    url: req.body.url,
  });
  res.send(JSON.stringify({ status: "sucess", code: 01, id: eid }));
}

async function displayPage(req, res) {
  const resp = await ledger.findOne({
    where: { entryid: req.params.id },
  });

  ledger.update(
    { clicks: resp.clicks + 1 },
    { where: { entryid: req.params.id } }
  );

  res.redirect(resp.url);
}

module.exports = {
  generateID,
  displayPage,
};
