// var express = require("express");
// var bodyParser = require("body-parser");
var path = require('path');

// var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var PORT = 5005;

module.exports = (function() {
    'use strict';

    var externalRoutes = require('express').Router();

    externalRoutes.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public', "survey.html"));
    });
    
    externalRoutes.get('*', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public', "home.html"));
        // res.send('hi there');
    });

    return externalRoutes;
})();






// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  