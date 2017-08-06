var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema({
    name: String,
    postcode: String
    modeOfTransport: {
    type: String
    speed: Number
    }
})

var Candidates = mongoose.model('Candidates', clientSchema);

module.exports = Candidates;
