var express = require('express');
var router = express.Router();
var Clients = require('../models/clients')
var Candidates = require('../models/candidates')
var mongoose = require('mongoose')

router.get('/', function(req, res, next){
  mongoose.model('Clients').find({}, function (err, clients){
  mongoose.model('Candidates').find({}, function (err, candidates){
    if (err) {
      return console.error(err);
    } else {
      res.format({
        html: function(){
        res.render('index', { "clients" : clients, 'candidates' : candidates });
          },
        json: function(){
        res.json(clients);
        res.json(candidates);
        }
      });
    }
  });
});
})

module.exports = router;
