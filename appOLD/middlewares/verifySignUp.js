const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err, code: 500 });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Esse email já está em uso", code: 400 });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail
};
module.exports = verifySignUp;