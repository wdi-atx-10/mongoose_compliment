var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

/* GET home page. */
var randomize = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

router.get('/', function(req, res, next) {
  var compliment;

  Compliment.find({}, '', function(err, compArr) {
    compliment = randomize(compArr);
    res.render('index', {
      title: 'Express',
      compliment: compliment
    });
  });
});

router.post('/', function(req, res, next) {
  var newCompliment = new Compliment({
    body: req.body.compliment
  });

  newCompliment.save(function(err, post) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        post: post
      });
    }
  });
});

module.exports = router;
