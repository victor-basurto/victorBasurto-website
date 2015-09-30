var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Victor Basurto' });
});

/* In case I need it */
router.get('/resume', function(req, res, next) {
	res.render('resume', {title: 'Resume'});
});

module.exports = router;
