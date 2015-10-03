var express = require('express');
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
