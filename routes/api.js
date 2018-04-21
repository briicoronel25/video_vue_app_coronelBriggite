var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');
var apiController = require('../controllers/apiController');

router.get('/movies/:type', apiController.get_movies);

router.get('/genres/:type', apiController.get_genres);

router.get('/reviews/:movie', apiController.get_reviews);

router.post('/reviews/', apiController.post_review);

module.exports = router;