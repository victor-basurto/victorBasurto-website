var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

// get path ../models/posts
var Contact = require('../models/posts');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Victor Basurto' });
});

/**
 * Post /contact Form
 */
router.post('/', function(req, res, next) {

	// get user data
	var data = {
		name: req.body.user_name,
		email: req.body.user_email,
		phone: req.body.user_phone,
		desc: req.body.user_desc
	}

	// pass data into new contact schema and save it as userData
	var userData = new Contact(data);

	// save data
	userData.save(function(err, obj) {
		// print values obtained from the userData to make sure it went trhough properly
		for ( var i = 0; i < arguments.length; i++ ) {
			console.log('Arguments ' + arguments[i]);
		}

		/**
		 * NodeMailer
		 */
		var transporter = nodemailer.createTransport('SMTP', {
			service: 'Gmail',
			auth: {
				XOAuth2: {
					user: process.env.USER_EMAIL, 
					pass: process.env.GMAIL_PASS
				}
			},
			debug: true
		});
		var mailOptions = {
			from: obj.email,
			to: 'the-email', //change this
			subject: 'Job Opportunity',
			html: '<h2>User: ' + obj.name + '</h2><br><h2>Phone Number: ' + obj.phone + '</h2><br><p><b>Content: </b>' + obj.desc + '</p>'
		}
		transporter.sendMail(mailOptions, function(err, res) {
			if ( err ) {
				console.log(err);
			} else {
				console.log('Message sent: ' + res.message);
			}
		});

		// log errors and render index
		if ( err ) {
			console.log(err);
			res.render('/');
		} else {
			// save data and render index
			console.log('Its perfect The Object is: ', {userData: obj});
			res.render('index');
		}
	});

});
module.exports = router;
