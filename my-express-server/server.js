const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Calculator</h1><br><");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: chanyoung.p.1988@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("I'm Chanyoung Park.");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Play the Guitar</li></ul><ul><li>Play the Game</li></ul><ul><li>Sing a song</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
