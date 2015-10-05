var mongoose = require('mongoose');

// define path to mongodb
// var dbPath = "mongodb://localhost/personalwebsite";
// define path for Heroku
var dbHerokuPath = "mongodb://victor:m0ng01abvict0r1985@ds029814.mongolab.com:29814/personalwebsite";
// stablish connection into Database
mongoose.connect(dbHerokuPath);

var db = mongoose.connection;

// define user Schema
var contactSchema = mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
	desc: String
});

// export this Schema to be available in other files
var Contact = module.exports = mongoose.model('Contact', contactSchema);