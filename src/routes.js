const router = require('express').Router();

const loginRequired = require('./middlewares/loginRequired');

const TokenController = require('./controllers/TokenController');
const UserController = require('./controllers/UserController');
const EmployeeController = require('./controllers/EmployeeController');
const ClientController = require('./controllers/ClientController');
const OrderServiceController = require('./controllers/OrderServiceController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const PhotoController = require('./controllers/PhotoController');
const HomeController = require('./controllers/HomeController');

// Rota Token 
router
    .post('/tokens', TokenController.store);  

   
// Rota User
router
    //.get('/users', UserController.index)
    //.get('/users/:id', UserController.show)
    .post('/users', UserController.store)
    .put('/users', loginRequired.middleware, UserController.update)
    .delete('/users', loginRequired.middleware, UserController.delete);


// Rota Employee
router
    .get('/employees', EmployeeController.index)
    .get('/employees/:id', EmployeeController.show)
    .post('/employees', loginRequired.middleware, EmployeeController.store)
    .put('/employees/:id', loginRequired.middleware, EmployeeController.update)
    .delete('/employees/:id', loginRequired.middleware, EmployeeController.delete);


// Rota Client
router
    .get('/client',  ClientController.index)
    .get('/client/:id', ClientController.show)
    .post('/client', loginRequired.middleware, ClientController.store)
    .put('/client/:id', loginRequired.middleware, ClientController.update)
    .delete('/client/:id', loginRequired.middleware, ClientController.delete);


//Rota OrderService
router
    .get('/orderservice',  OrderServiceController.index)
    .get('/orderservice/:id', OrderServiceController.show)
    .post('/orderservice', loginRequired.middleware, OrderServiceController.store)
    .put('/orderservice/:id', loginRequired.middleware, OrderServiceController.update)
    .delete('/orderservice/:id', loginRequired.middleware, OrderServiceController.delete);

//Rota Product
router
    .get('/product',  ProductController.index)
    .get('/product/:id', ProductController.show)
    .post('/product', loginRequired.middleware, ProductController.store)
    .put('/product/:id', loginRequired.middleware, ProductController.update)
    .delete('/product/:id', loginRequired.middleware, ProductController.delete);

//Rota Category
router
    .get('/category',  CategoryController.index)
    .get('/category/:id', CategoryController.show)
    .post('/category', loginRequired.middleware, CategoryController.store)
    .put('/category/:id', loginRequired.middleware, CategoryController.update)
    .delete('/category/:id', loginRequired.middleware, CategoryController.delete);

// Rota Home
router
    .get('/home',  HomeController.index);

// Rota Photo
router
    .post('/photo', loginRequired.middleware,  PhotoController.store);


module.exports = router;