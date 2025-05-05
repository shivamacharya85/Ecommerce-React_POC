const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // ecommercedb
  process.env.DB_USER,     // postgres
  process.env.DB_PASSWORD, // your actual password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
);

module.exports = sequelize;
