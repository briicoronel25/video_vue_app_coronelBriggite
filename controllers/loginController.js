var connect = require('../utils/sqlConnect');

exports.get_login = function(req, res, next) {
    res.render('login', { login: true, title: 'Log in - Cool Movies' });
};

exports.log_user = function(req, res, next) {
    var user = req.body.user;
    var pass = req.body.password;
    connect.query(`SELECT * FROM users WHERE username="${user}" AND password="${pass}"`, (err, result) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("this result: " + JSON.stringify(result));
            if (result[0]) {
                if (result[0]["type"] == "adult") {
                    res.redirect('../videos/general');
                } else {
                    res.redirect('../videos/kids');
                }
            } else {
                console.log("USER INCORRECT!");
                res.render('login', { login: true, title: 'Log in - Cool Movies', warning: 'The user or password is incorrect. Try again' });
            }
        }
    });
};