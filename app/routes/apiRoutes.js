// Load Data ================================================================

var friendData = require("../data/friends.js")

// Export Routes ============================================================

module.exports = function(app) {
  // API GET ================================================================
  // Get the list of friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST ===============================================================
  // Add a new friend
  app.post("/api/friends", function(req, res) {
    // Push users data
    friendData.push(req.body)
  })
}
