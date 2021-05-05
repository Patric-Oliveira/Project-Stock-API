const Sequelize =  require('sequelize');
const dbConfig = require('../config/database');

const Employees = require('../models/Employee');
const User = require('../models/User')

const models = [Employees, User]

const connection = new Sequelize(dbConfig);
try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

models.forEach((model) => model.init(connection));


module.exports = connection;