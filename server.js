// Dependencies =============================================================

var express = require("express");
// var favicon = require('serve-favicon')
// var path = require('path')

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
// app.use(favicon(__dirname + '/app/public/assets/images/favicon.ico'));

// Routes ==================================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});