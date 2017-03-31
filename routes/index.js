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

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();

	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW
  Compliment.findOneRandom(function(err, result) {
    console.log('right here!');
    if (!err) {
      console.log(result);
      res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: result.compliment });
    } else {
      console.log(err);
  }
  });

	//var compliment = null; // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.
	//res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = new Compliment({compliment: req.body.compliment});

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL

    newCompliment.save(function(err, post){
    if (err) {
      res.send({
        status: 'Error',
        error: err
      });
    } else {
      res.redirect('/')
    }
  });
	//res.redirect('/');
});

module.exports = router;
