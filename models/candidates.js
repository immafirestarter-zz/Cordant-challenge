var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema({
    name: String,
    postcode: String,
  },
{
  collection : 'Candidates'
});

var Candidates = mongoose.model('Candidates', candidateSchema);

module.exports = Candidates;
