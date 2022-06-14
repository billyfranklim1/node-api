
const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require('mongoose');
const app = express();


const cookieConfig = require("./app/config/cookie.config.js");
const dbConfig = require("./app/config/db.config");

var corsOptions = {
  origin: "http://localhost:8081"
};
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

mongoose.connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@cluster0.mlxr79x.mongodb.net/?retryWrites=true&w=majority`);

mongoose.connection.on('connected', function () {
  console.log('Connected to Database');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});


app.get('/', function(req, res){
  res.send({version: '1.0.0',name: 'API'});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.use(function(err, req, res, next){
 res.status(422).send({error: err.message});
});