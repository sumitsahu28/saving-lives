var express = require('express');
var router = express.Router();
const users = require('../controllers/users');
const hospitals = require('../controllers/hospitals');
const userAuthorization = require('../middleware/userAuthorization');
const hospitalAuthorization = require('../middleware/hospitalAuthorization');
const miscellaneous = require('../controllers/miscellaneous');

router.post('/user/signup', users.signup);

router.post('/user/login', users.login);

router.get('/user/profile',userAuthorization, users.profile);

router.post('/hospital/signup', hospitals.signup);

router.post('/hospital/login', hospitals.login);

router.get('/hospital/profile',hospitalAuthorization, hospitals.profile);

router.post('/miscellaneous/volunteer', miscellaneous.volunteers);

router.post('/miscellaneous/visitor', miscellaneous.visitors);

module.exports = router;
