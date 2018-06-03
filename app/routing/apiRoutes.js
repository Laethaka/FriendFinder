// var express = require("express");
// var bodyParser = require("body-parser");
// var fileSys = require('fs');
var path = require('path');

// var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var PORT = 5005;

app.get('/api/friends', function(req,res) {
    res.json()
});

app.post('/api/friends', function(req,res) {
    // res.sendFile(path.join(__dirname + '/../public', "home.html"));

});




// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  