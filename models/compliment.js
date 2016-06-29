var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var complimentSchema = new Schema({
  compliment: { type: String, required: true }
});

var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
