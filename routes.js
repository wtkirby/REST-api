var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.sendfile('index.html');
  console.log("GET /");
});

module.exports = router;
