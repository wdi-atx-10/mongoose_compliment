var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

function randomCompliment(compliment){
	return compliment[Math.floor(Math.random()*compliment.length)];
}



/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();

	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW

	Compliment.find({}, function(err,compliments){
		if (err) console.log("db error", err);

		console.log("success");

		var randomcompliment = randomCompliment(compliments);

		console.log(randomcompliment);
		res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: randomcompliment.compliment});
	});




	//var compliment = null; // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.
	
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	console.log("new compliment", newCompliment);

	var compliment = new Compliment({
		compliment:  newCompliment,
		created_at: new Date()
	});

	compliment.save(function(err,compliment){
		if (err) console.log(err);
		console.log("saved");
	});

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	res.redirect('/');
});

module.exports = router;
