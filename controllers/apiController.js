var connect = require('../utils/sqlConnect');

exports.get_movies = function(req, res, next) {
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
};

exports.get_genres = function(req, res, next) {
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
};

exports.get_reviews = function(req, res, next) {
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
};

exports.post_review = function(req, res, next) {
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
};