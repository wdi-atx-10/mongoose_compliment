var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

function randomCompliment(complimentsList) {
	var randomComp = complimentsList[Math.floor(Math.random()*complimentsList.length)];
	return randomComp;
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	var name = req.params.name || "Friend";
	var color = randomColor();
	var compliment = null;
	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW
	Compliment.find({},function(err, response) {
		if (err) {console.log('Error: ', err)}

		console.log(response);

		var random = randomCompliment(response);
		compliment = random.compliment;


		res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	});
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = new Compliment ({
		compliment: req.body.compliment
	});

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	newCompliment.save(function(err, compliment){
    if (err){
      res.send({
        status : 'Submit Error: ',
        error : err
      });
    }
    else {
      console.log('Compliment Submitted!', compliment);
      res.redirect('/');
    }
  });
});

module.exports = router;
