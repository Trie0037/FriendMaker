//Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Express config
const app = express();
const PORT = process.env.PORT || 3000;

//express.static Used to serve images, css files, and javascript files
app.use(express.static(__dirname + "/app/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//Application Routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

// Listener
app.listen(PORT, function() {
  console.log(
    "App listening on PORT " +
      PORT
  );
});
