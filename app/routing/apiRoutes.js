// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends");


module.exports = function(app) {
	
   app.get("/api/friends", function(req,res) {
	res.json(friends);
   });

   

   app.post("/api/friends", function(req,res) {
    
   var newFriend = req.body;
   console.log(req.body);
   res.json(req.body)
   });

    // app.post("/api/surveySubmit", function(req,res) {
    // friends.push(req.body);
   	// console.log(req.body);

    // var newFriend = req.body;
    // var friendsArray =[];

    //     for (var i=0; i<friendsArray; i++){
    //   var scoresDiff=0;

    //   for (var j=0; j<newFriend.length; j++){
    //      scoresDiff += (Math.abs(parseInt(friends[i].scores[j])-parseInt(newFriend[j])));
    //   }
    //   newFriend.push(scoresDiff);
    //  }
   }
