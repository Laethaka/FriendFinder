var path = require('path');

module.exports = (function() {
    'use strict';

    var apiRoutes = require('express').Router();

    apiRoutes.get('/friends', function(req,res) {
        res.sendFile(path.join(__dirname + '/../data', 'friends.json'))
    });

    apiRoutes.post('/api/friends', function(req,res) {
        // res.sendFile(path.join(__dirname + '/../public', "home.html"));
    });
    return apiRoutes;
})();

