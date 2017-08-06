var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema({
    name: String,
    postcode: String,
    modeOfTransport: { type: String, speed: Number },
  },
{
  collection : 'Candidates'
});

var Candidates = mongoose.model('Candidates', candidateSchema);

module.exports = Candidates;
