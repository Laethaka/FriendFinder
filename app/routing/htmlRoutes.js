var path = require('path');

'use strict';

var htmlRoutes = require('express').Router();

htmlRoutes.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlRoutes.get('/images/:image', function (req, res) {
    res.sendFile(path.join(__dirname, `../public/images/${req.params.image}`));
});

htmlRoutes.get('/css/:css', function (req, res) {
    res.sendFile(path.join(__dirname, `../public/css/${req.params.css}`));
});

htmlRoutes.get('/javascript/:javascript', function (req, res) {
    res.sendFile(path.join(__dirname, `../public/javascript/${req.params.js}`));
});

htmlRoutes.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlRoutes;
