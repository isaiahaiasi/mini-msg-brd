const express = require("express");
const router = express.Router();
const messages = require("../messages");

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  const { msgText, user } = req.body;
  const added = new Date();
  messages.push({ text: msgText, user, added });
  res.redirect("/");
});

module.exports = router;
