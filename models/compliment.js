var mongoose = require('mongoose');


var complimentSchema = new mongoose.Schema({
  compliment: { type: String }
});


var Compliment = mongoose.model('Compliment', complimentSchema);
module.exports = Compliment;
