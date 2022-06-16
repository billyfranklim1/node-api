
const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require('mongoose');
const app = express();
swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./utils/swagger.json');

const cookieConfig = require("../config/cookie.config.js");
const dbConfig = require("../config/db.config");
const errorHandling = require('./middlewares/error-handling');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: cookieConfig.name,
    secret: cookieConfig.secret,
    httpOnly: true
  })
);

app.get('/', function(req, res){
  res.send({version: '1.0.0',name: 'API'});
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
 });
app.use(errorHandling);


module.exports = app;
