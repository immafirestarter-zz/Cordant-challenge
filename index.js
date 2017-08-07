var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var configDB = require('./config/database.js');
var dB = mongoose.connection;
var index = require('./routes/index');
var path = require('path')

mongoose.connect(configDB.url, { useMongoClient: true });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

require('./routes/index')(app);

app.listen(8000, function() {
  console.log('listening on 8000')
});

dB.on('error', console.error.bind(console, "mongo error"));

module.exports = index;
