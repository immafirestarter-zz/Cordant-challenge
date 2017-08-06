var express = require('express');
var router = express.Router();
var Clients = require('../models/clients')
var Candidates = require('../models/candidates')

router.get('/', function(req, res){
  res.render('index')
});

module.exports = router;
