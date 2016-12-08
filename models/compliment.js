var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  compliment: { type: String, required: true }
});

var model = mongoose.model('Compliment', schema);

// Make this available to our other files
module.exports = model;
