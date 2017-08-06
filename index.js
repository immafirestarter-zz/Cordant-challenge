var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var configDB = require('./config/database.js');
var dB = mongoose.connection;

mongoose.connect(configDB.url, { useMongoClient: true });

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ extended: false}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(8000, function() {
  console.log('listening on 8000')
});

dB.on('error', console.error.bind(console, "mongo error"));
