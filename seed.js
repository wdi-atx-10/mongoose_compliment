require('dotenv').config({silent: true});

var mongoose = require('mongoose');

// TODO: You will need to set up an environment variable and use the dotenv package
mongoose.connect(process.env.complimentsdbconn);

var compliment = require('./models/compliment');

var compliments = [
	{
		compliment: 'A',
		created_at: new Date()
	},
	{
		compliment: 'B',
		created_at: new Date()
	},
	{
		compliment: 'C',
		created_at: new Date()
	},
	{
		compliment: 'D',
		created_at: new Date()
	},
	{
		compliment: 'E',
		created_at: new Date()
	}
];

compliment.create(compliments, function(err,compliments){
	if (err) console.log(err);

	console.log('compliments created:', compliments);
	process.exit();
});