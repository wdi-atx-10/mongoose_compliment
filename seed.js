require('dotenv').config({
  silent: true
});

var mongoose = require('mongoose');

mongoose.connect(process.env.COMPLIMENT_DB_CONN);

var Compliment = require('./models/compliment');

var compliments = [{
    compliment: 'Good job',
    createdAt: new Date()
  },
  {
    compliment: 'Great Job',
    createdAt: new Date()
  },
  {
    compliment: 'You are super!',
    createdAt: new Date()
  }
];

Compliment.create(compliments, function(err, compliments) {
  if (err) console.log(err);
  console.log('Compliments created: ', compliments);
  process.exit();
});
