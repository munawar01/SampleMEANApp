var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferedBarber: String
});

module.exports = mongoose.model('Customer', CustomerSchema);
