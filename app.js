//Config dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

//arquivos estaticos
const { resolve } = require('path');

//iniciando o modulo de conexão do DB
require('./src/database');

//Config express
const express = require('express');
const app = express();

//capturar dados
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));

// chamando e iniciando o middlewares rateLimit
const rateLimit = require('./src/middlewares/rateLimit');
app.use(...rateLimit);

//carregando e inicializando as rotas
const routes = require('./src/routes');
app.use(routes)

module.exports = app;