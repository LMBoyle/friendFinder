// Dependencies =============================================================

var express = require("express");
var path = require("path");

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes ===================================================================

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});