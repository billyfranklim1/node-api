require('dotenv').config()


module.exports = {
  name: process.env.APP_NAME,
  secret: process.env.APP_KEY,
  httpOnly: true
};