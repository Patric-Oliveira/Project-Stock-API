const router = require('express').Router();

const loginRequired = require('./middlewares/loginRequired');

const TokenController = require('./controllers/TokenController');
const UserController = require('./controllers/UserController');
const EmployeeController = require('./controllers/EmployeeController');
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



module.exports = router;