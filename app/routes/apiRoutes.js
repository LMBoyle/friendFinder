// Load Data ================================================================

var friendData = require("../data/friends.js")

// Export Routes ============================================================

module.exports = function(app) {
  // API GET ----------------------------------------------------------------
  // Get the list of friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST ---------------------------------------------------------------
  // Add a new friend and find match
  app.post("/api/friends", function(req, res) {
    // Current User
    var user = req.body;
    // Start with first friend
    var friendIndex = 0;
    // Start with the max difference
    var maxDifference = 40;

    // Go through each person and compare scores
    for (var f = 0; f < friendData.length; f++) {
      var currDiff = 0;
      // For each friend compare scores
      for (var s = 0; s < friendData[f].scores.length; s++) {
        currDiff = Math.abs(parseInt(user.scores[s]) - friendData[f].scores[s])
      }

      // If current difference is less than the max difference...
      if (currDiff < maxDifference) {
        // update the friend &...
        friendIndex = f;
        // Set a new max different
        maxDifference = currDiff;
      }
    }

    // Push users data
    friendData.push(req.body);
    // Send match back to browser
    res.json(friendData[friendIndex])
  })
}
