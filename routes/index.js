var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello! This is Patrick.",
    user: "Patrick",
    added: new Date(),
  },
  {
    text: "Hello world",
    user: "Quote",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "mini msg brd", messages });
});

module.exports = router;
