//Config dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

//iniciando o modulo de conexão do DB
require('./src/database');

//Config express
const express = require('express');
const app = express();

//capturar dados
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//carregando e inicializando as rotas
const routes = require('./src/routes');
app.use(routes)

module.exports = app;