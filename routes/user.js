// Get access to the express modules
var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
  res.send('This should be a list of all users!');
  console.log("GET /users");
});

router.get('/user/:id', function(req, res){
  res.send('This should contain the information of user with ID: ' + req.params.id);
  console.log('GET /user/' + req.params.id);
});

router.post('/addUser', function(req, res){
  res.send('This would handle a post request to add a user.');
  console.log('POST /addUser\n', req.body);
})

module.exports = router;
