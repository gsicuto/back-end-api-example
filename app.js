require('dotenv').config(); // Utilizar as variaveis

const express = require('express');
const bodyParser = require('body-parser'); // Middleware permite acessar req.body
const cors = require('cors'); // Permite que origens diferentes do servidor tenham acesso as rotas
// Connectar no mongoDB

require('./config/db.config');

const app = express();


// Middlewares

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todos.routes');

// Rotas Publicas
app.use('/', authRoutes);

// Middleware de validação de token
app.use(require('./middlewares/authmiddleware'));

// Rotas Privadas
app.use('/', todoRoutes);

module.exports = app;
