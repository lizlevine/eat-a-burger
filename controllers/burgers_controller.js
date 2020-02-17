// create referrence to express and express router

var express = require("express");
var router = express.Router();

// setup base route & render to index.hb in views folder

router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
