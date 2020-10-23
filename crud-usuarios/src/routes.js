const express = require('express');
const routes = express.Router();

const UsuariosController = require('./controllers/UsuariosController');
routes.get('/usuarios', UsuariosController.index);
routes.post('/salvar-usuarios', UsuariosController.store)


module.exports = routes;