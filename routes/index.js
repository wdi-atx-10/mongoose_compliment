var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

function randomCompliment(complimentList) {
	return complimentList[Math.floor(Math.random()*complimentList.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();

	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW

	Compliment.find({}, function(err, response){
    if(err){
      res.status(500).send({
        status: "error",
        error: err
      });
    }

		var random = randomCompliment(response);
		var compliment = random.compliment;
		res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	});
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = new Compliment({
		compliment: req.body.compliment
	});

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL

	newCompliment.save(function(err,compliment){
		if(err){
      res.status(500).send({
        status: "error",
        error: err
      });
    }
		console.log('Compliment submitted');
		res.redirect('/');
	});
});

module.exports = router;
