var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');
var videoController = require('../controllers/videoController');


router.get('/kids', videoController.get_kids_movies);

router.get('/general', videoController.get_general_movies);

router.get('/kids/filter', function(req, res, next) {
    cat = req.query.category;
    if (cat != "all") {
        connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="kids"`, (err, result) => {
            if (err) {
                throw err;
                console.log(err);
            } else {
                console.log(JSON.stringify(result));
                query = `SELECT * FROM movies WHERE genre="${cat}" AND user_type="kids"`;
                console.log(query);
                connect.query(`SELECT * FROM movies WHERE genre="${cat}" AND user_type="kids"`, (err, content_result) => {
                    if (err) {
                        throw err;
                        console.log(err);
                    } else {
                        console.log(JSON.stringify(content_result));
                        res.render('videos', { videos: true, kids: true, title: 'Videos for kids - Cool Movies', result_category: result, category: cat, result_content: content_result, host: req.hostname });
                    }
                });
            }
        });
    } else {
        res.redirect('../kids');
    }
});



router.get('/general/filter', function(req, res, next) {
    cat = req.query.category;
    if (cat != "all") {
        connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="adult"`, (err, result) => {
            if (err) {
                throw err;
                console.log(err);
            } else {
                console.log(JSON.stringify(result));
                connect.query(`SELECT * FROM movies WHERE genre="${cat}" AND user_type="adult"`, (err, content_result) => {
                    if (err) {
                        throw err;
                        console.log(err);
                    } else {
                        console.log(JSON.stringify(content_result));
                        res.render('videos', { videos: true, general: true, title: 'Videos - Cool Movies', result_category: result, category: cat, result_content: content_result, host: req.hostname });
                    }
                });
            }
        });
    } else {
        res.redirect('../general');
    }
});

router.get('/general/:id', videoController.get_general_movie);

router.get('/kids/:id', videoController.get_kids_movie);

module.exports = router;