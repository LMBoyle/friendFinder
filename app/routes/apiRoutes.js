// Dependencies =============================================================

var friendList = require("../data/friends.js")

// Export Routes ============================================================

module.exports = function(app) {
  // Get the list of friends
  app.get("/api/friends", function(req, res) {
    return res.json(characters);
  });

  // Add a new friend
  
}
