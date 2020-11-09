const express = require('express');
const routes = express.Router();

const MembrosControllers = require('./controllers/MembrosControllers');

/**
 * rota
 * 
 * req => é tudo que vem na requisição (POST, PUT, PATH)
 * res => é a resposta de uma requisição (GIT)
 * GET => RECEBE INFORMAÇÃO - SELECT * FROM
 * POST => ENVIA INFORMÇÕES
 * PUT - ENVIA UMA INFORMÇÃO ESPECIFICA (NORMALMENTE É ATUALIZAÇÃO)
 * DELETE=> ENVIA UMA SOLICITAÇÃO DE DELETAR
 */
routes.get('/membros',MembrosControllers.lista);
routes.post('/cadastro-membros', MembrosControllers.salvarMembro);

module.exports = routes;