// create referrence to express and express router- this file will hold all the routes in app -
// router.get, router.put, router.post go here - api calls here

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// setup base route & render to index.hb in views folder

router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render("index", { burger_data });
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// might need a router.delete ?

module.exports = router;
