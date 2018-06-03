var path = require('path');

module.exports = (function() {
    'use strict';

    var htmlRoutes = require('express').Router();

    htmlRoutes.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public', "survey.html"));
    });
    
    htmlRoutes.get('*', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public', "home.html"));
    });

    return htmlRoutes;
})();
