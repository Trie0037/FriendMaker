var friendsInfo = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsInfo);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.scores.forEach(function(score) {
      if (score.scores == "1 (Strongly Disagree)") {
        score.scores = 1;
      } else if (score.scores == "5 (Strongly Agree)") {
        score.scores = 5;
      } else {
        score.scores = parseInt(score.scores);
      }
    });

    var matchName = {};
    var matchImage = 0;
    var matchBest = 10000;

    for (var i = 0; i < friendsInfo.length; i++) {
      var totalScoreDiff = 0;

      for (var j = 0; j < friendsInfo[i].scores.length; j++) {
        var diff = Math.abs(friendsInfo[i].scores[j] - newFriend.scores[j]);
        totalScoreDiff += diff;
      }

      if (totalScoreDiff < matchBest) {
        matchImage = [i];
        matchBest = totalScoreDiff;
      }
    }

    matchName = friendsInfo[matchImage];

    friendsInfo.push(newFriend);

    res.json(matchName);
  });
};
