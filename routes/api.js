var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/movies/:type', function(req, res, next) {
    type = req.params.type;
    connect.query(`SELECT * FROM movies WHERE user_type='${type}'`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("FROM API MOVIES:" + JSON.stringify(result));
            res.json(result);
        }
    });
});



router.get('/genres/:type', function(req, res, next) {
    type = req.params.type;
    console.log("I AM ON GENRES REQUEST!->" + type);
    connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type='${type}'`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
            res.json(result);
        }
    });
});

router.get('/reviews/:movie', function(req, res, next) {
    movie_id = req.params.movie;
    connect.query(`SELECT * FROM reviews WHERE movie='${movie_id}'`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
            res.json(result);
        }
    });
});

router.post('/reviews/', function(req, res, next) {
    movie_id = req.body.movieId;
    username = req.body.username;
    numStars = req.body.numStars;
    review = req.body.review;
    query = `INSERT INTO reviews (id, movie, username, comment, review, date) VALUES (NULL,"${movie_id}" , "${username}","${review}","${numStars}" ,CURRENT_TIMESTAMP());`;

    connect.query(query, (err, rows) => {
        if (err) {
            return console.log(err.message);
        }

        res.json(rows);
    })
});

module.exports = router;