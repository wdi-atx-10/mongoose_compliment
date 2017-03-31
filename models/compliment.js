// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');

var compSchema = new mongoose.Schema({
	compliment : { type: String, required: true },
});


var Compliment = mongoose.model('Compliment', compSchema);


// Make this available to our other files
module.exports = Compliment;
