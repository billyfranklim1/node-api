require('dotenv').config()

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  DATABASE: process.env.DB_DATABASE,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
};