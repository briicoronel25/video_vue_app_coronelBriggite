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

module.exports = router;