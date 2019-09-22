// Dependencies =============================================================

var path = require("path");

// Export Routes ============================================================

module.exports = function(app) {
  // Survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // All other routes default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
}


