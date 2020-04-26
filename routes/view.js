var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saving Lives' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Saving Lives' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Saving Lives' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Saving Lives' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Saving Lives' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Saving Lives' });
});

router.get('/userSignup', function(req, res, next) {
  res.render('userSignup', { title: 'Saving Lives' });
});

router.get('/userLogin', function(req, res, next) {
  res.render('userLogin', { title: 'Saving Lives' });
});

router.get('/hospitalSignup', function(req, res, next) {
  res.render('hospitalSignup', { title: 'Saving Lives' });
});

router.get('/hospitalLogin', function(req, res, next) {
  res.render('hospitalLogin', { title: 'Saving Lives' });
});

module.exports = router;
