// Dependencies =============================================================

var friendList = require("../data/friends.js")

// Export Routes ============================================================

module.exports = function(app) {
  // Get the list of friends
  app.get("/api/friends", function(req, res) {
    return res.json(friendList);
  });

  // Add a new friend
  app.post("/api/friends", function(req, res) {
    // Get users data
    var user = req.body
    
  })
}
