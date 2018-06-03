var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 5005;

var apiRoutes = require('./app/routing/apiRoutes');
app.use('/api', apiRoutes);

var htmlRoutes = require('./app/routing/htmlRoutes');
app.use('/', htmlRoutes);







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  
