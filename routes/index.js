var express = require('express');
var router = express.Router();
var Clients = require('../models/clients')
var mongoose = require('mongoose')
var Candidates = require('../models/candidates')

module.exports = function(router) {

router.get('/clients', function(req, res, next){
  mongoose.model('Clients').find({}, function (err, clients){
    if (err) {
      return console.error(err);
    } else {
      res.json(clients);
    }
  });
});

router.get('/candidates', function(req, res, next){
  mongoose.model('Candidates').find({}, function (err, candidates){
    if (err) {
      return console.error(err);
    } else {
      res.json(candidates);
    }
  });
});

router.get('*', function(req, res) {
  res.render('index')
});
};
