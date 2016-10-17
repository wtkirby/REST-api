// Packages to be used for our app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Used for parsing json data in the request body.
app.use(bodyParser.json());

// Router to handle the static page requests
var staticRoutes = require('./routes/static.js');
// Example of using a router for handling request for user information
var userRoutes = require('./routes/user.js');

// Start router for static pages at the website root
app.use('/', staticRoutes);
// Start router for the users at the website root
app.use('/', userRoutes);

// Port to start server on
var port = 8080;
// Start the server
app.listen(port);
console.log('Server started on port: ' + port);
console.log('Go to localhost:' + port + 'in the browser');
