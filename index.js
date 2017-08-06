var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var configDB = require('./config/database.js');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url, { useMongoClient: true });

var app = express();

app.listen(8000, function() {
  console.log('listening on 8000')
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;
