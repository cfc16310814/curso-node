const express = require('express');
const routes = express.Router();

const UsuariosController = require('./controllers/UsuariosController');
routes.get('/usuarios', UsuariosController.index);
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/salvar-usuarios', UsuariosController.store)
 routes.put('/usuarios/:id', UsuariosController.update)
 routes.delete('/usuarios/:id', UsuariosController.delete)

module.exports = routes;