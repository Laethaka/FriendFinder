var path = require('path');
var fileSys = require('fs');

'use strict';

var apiRoutes = require('express').Router();

apiRoutes.get('/friends', function(req,res) {//DECLARING HOW TO SEND FRIENDS JSON
    res.sendFile(path.join(__dirname + '/../data', 'friends.json'))
});

apiRoutes.post('/friends', function(req,res) {

    var newFriend = req.body; //STORING INCOMING JSON    
    var friendsJSON = require("../data/friends.json");

    var match;
    var matchScore = 100;

    for (var idx=0; idx<friendsJSON.length; idx++) {//OUTER LOOPING THROUGH FRIENDS
        var totalDiff = 0;
        for (var jdx=0; jdx<10; jdx++) {//INNER LOOPING THROUGH SCORES
            totalDiff += Math.abs(newFriend.scores[jdx]-friendsJSON[idx].scores[jdx])
        }
        if (totalDiff < matchScore) {//NEW MATCH FOUND
            matchScore = totalDiff
            match = friendsJSON[idx];
        }
    }

    //PUSHING NEW FRIEND INTO JSON
    friendsJSON.push(newFriend);
    fileSys.writeFile(path.join(__dirname + '/../data', 'friends.json'), JSON.stringify(friendsJSON, null, 2), function(err){
        if (err) throw err;
    })

    res.json(match);//SENDING RESPONSE
});

module.exports = apiRoutes;
