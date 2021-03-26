require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connectar no mongoDB

require('./config/db.config');

const app = express();

app.use(cors());

// Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
const todoRoutes = require('./routes/todos.routes');

app.use('/', todoRoutes);

module.exports = app;
