// Dependencies =============================================================

var path = require("path");

// Export Routes ============================================================

module.exports = function(app) {
  // Survey Page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // All Other Routes
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
}


