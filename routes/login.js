var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();
var loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.get_login);

router.post('/', loginController.log_user);


module.exports = router;