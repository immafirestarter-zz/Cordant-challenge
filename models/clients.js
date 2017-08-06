var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: String,
    postcode: String
})

var Clients = mongoose.model('Clients', clientSchema);

module.exports = Clients;
