var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tim Rhoades | Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Tim Rhoades | About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Tim Rhoades | Contact Us' });
});



module.exports = router;
