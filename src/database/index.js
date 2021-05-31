const Sequelize =  require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Employees = require('../models/Employee');
const Client = require('../models/Client');
const OrderService = require('../models/OrderService');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Photo = require('../models/Photo');


const models = [User, Employees, Client, OrderService, Product, Category, Photo]

const connection = new Sequelize(dbConfig);
try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));


module.exports = connection, connection.models;