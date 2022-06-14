const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = function (req, res, next) {

    User.findOne({ email: req.body.email, })
        .select('+password')
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404)
                    .send({ message: "Usuário não encontrado", code: 404 });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({ message: "Senha inválida", code: 401 });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });

            req.session.token = token;
            res.status(200).send({
                id: user._id,
                name: user.name,
                email: user.email,
                token: token,
            });
        });
}

exports.signup = (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password ? bcrypt.hashSync(req.body.password, 8) : null,
    });
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400, // 24 hours
        });
        res.status(200).send({
            id: user._id,
            name: user.name,
            email: user.email,
            token: token,
        });

    });
};

exports.signout = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!", code: 200 });
    } catch (err) {
        this.next(err);
    }
};