// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var complimentSchema = new mongoose.Schema({
  compliment: {type: String, required: true}
});

complimentSchema.plugin(random);
var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
