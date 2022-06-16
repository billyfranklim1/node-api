const User = require('../models/user.model');

exports.createUser = function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
};

exports.updateUser = function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    }).catch(next);
};

exports.getUser = function (req, res) {
    if(req.params.id === 'me') {
        req.params.id = req.userId;
    }

    User.findById(req.params.id).then(function (user) {
        user.password = undefined;
        res.send(user);
    });
};

exports.getUsers = function (req, res) {
    User.find({}).then(function (users) {
        res.send(users);
    });
};

exports.delete = function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    }).catch(next);
};

exports.login = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    var erros = [];

    if (!email) {
        erros.push('Email is required');
    }
    if (!password) {
        erros.push('Password is required');
    }

    if (erros.length) {
        res.status(400).send(
            {
                erros: erros,
                message: 'There were errors in your request'
            }
        );
    }

    User.findOne({ email: req.body.email, password: req.body.password }).then(function (user) {
        res.send(user);
    }).catch(next);
}
