var mongoose = require('mongoose');
var random = require('mongoose-simple-random'); //randomizes data


var schema = new mongoose.Schema({
  compliment : {type: String, required: true}
});

schema.plugin(random); //utilizing mongoose-simple-random
var Compliment = mongoose.model('Compliment', schema);

// Make this available to our other files
module.exports = Compliment;
