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
			service: 'gmail',
			port: 465,
			secure: true,
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASS,
				clientId: process.env.CLIENT_ID,
				clientSecret: process.env.CLIENT_SECRET,
				refreshToken: process.env.REFRESH_TOKEN,
				accessToken: process.env.ACCESS_TOKEN,
				access_type: 'offline',
				timeout: 3600
			},
			debug: true
		});
		var mailOptions = {
			from: obj.email,
			to: process.env.USER_EMAIL,
			subject: 'Job Opportunity',
			html: '<h2>User: </h2><h3>' + obj.name + '</h3><br><h2>Phone Number: </h2><h3>' + obj.phone + '</h3><br><h2>Email: </h2><h3>' + obj.email +'</h3><br><h2>Content: </h2><h3>' + obj.desc + '</h3>'
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
