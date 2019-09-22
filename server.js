// Dependencies =============================================================

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes ==================================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});