var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

function randomCompliment(compliments) {
 	return compliment[Math.floor(Math.random()*compliment.length)];
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
	var random = randomCompliment(response);

	Compliment.find({}, function(err, response){
    if(err){
      res.status(500).send({
        status: "error",
        error: err
      });
    }
	res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
});
})

router.post('/', function(req, res, next) {
	var newCompliment = new Compliment({
		compliment: req.body.compliment
	});

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
