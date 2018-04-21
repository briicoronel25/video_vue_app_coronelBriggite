var connect = require('../utils/sqlConnect');

exports.get_kids_movies = function(req, res, next) {
    connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="kids"`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("FROM API GENRES:" + JSON.stringify(result));
            connect.query(`SELECT * FROM movies WHERE user_type="kids"`, (err, content_result) => {
                if (err) {
                    throw err;
                    console.log(err);
                } else {
                    console.log(JSON.stringify(content_result));
                    res.render('videos', { videos: true, kids: true, title: 'Videos for kids - Cool Movies', result_category: result, category: "all", result_content: content_result, host: req.hostname });
                }
            });
        }
    });
};

exports.get_general_movies = function(req, res, next) {
    connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="adult"`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            //console.log(JSON.stringify(result));
            connect.query(`SELECT * FROM movies WHERE user_type="adult"`, (err, content_result) => {
                if (err) {
                    throw err;
                    console.log(err);
                } else {
                    //console.log(JSON.stringify(content_result));
                    res.render('videos', { videos: true, general: true, title: 'Videos - Cool Movies', result_category: result, category: "all", result_content: content_result, host: req.hostname });
                }
            });
        }
    });
};

exports.get_general_movie = function(req, res, next) {
    id = req.params.id;
    connect.query(`SELECT * FROM movies WHERE id="${id}"`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
            res.render('details', { videos: true, general: true, details: true, title: 'Video details - Cool Movies', movie: result[0] });
        }
    });
};

exports.get_kids_movie = function(req, res, next) {
    id = req.params.id;
    connect.query(`SELECT * FROM movies WHERE id="${id}"`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
            res.render('details', { videos: true, kids: true, details: true, title: 'Video details - Cool Movies', movie: result[0] });
        }
    });
};