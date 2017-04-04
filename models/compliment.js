// How can we set up the Compliment model to talk to our database?
// Look at past examples


var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  compliment: { type: String, required: true },
  created_at: Date,
  updated_at: Date

});

var compliment = mongoose.model('compliment', schema);

//var Race = mongoose.model('Race', schema);



// Make this available to our other files
module.exports = compliment;
