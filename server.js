// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
// set-up for node server....

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.listen(PORT);
