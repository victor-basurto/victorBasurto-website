var mongoose = require('mongoose');

// define path to mongodb
var dbPath ="mongodb://localhost/personalwebsite";
// stablish connection into Database
mongoose.connect(dbPath);

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