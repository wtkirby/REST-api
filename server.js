// Packages to be used for our app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Used for parsing json data in the request body.
app.use(bodyParser.json());

var routes = require('./routes.js');

app.use('/', routes);

var port = 8080;
app.listen(port);
console.log('Server started on port: ' + port);
