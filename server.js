// Dependencies =============================================================

var express = require("express");
var path = require("path");

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes ===================================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// API Routes
app.get("/api/", function(req, res) {
  return res.json(characters);
});

// All Other Routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"))
});

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});