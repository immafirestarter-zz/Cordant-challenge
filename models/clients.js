var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    id: String,
    name: String,
    postcode: String
},
{
  collection : "Clients"
});

var Clients = mongoose.model('Clients', clientSchema);

module.exports = Clients;
