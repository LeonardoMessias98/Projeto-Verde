const express = require('express');
const { Router } = express;

const routes = new Router();

const PessoasController = require('./controllers/PessoasController');
const EmpresaController = require('./controllers/EmpresaController');
const ProjetosController = require('./controllers/ProjetosController');

routes.get('/pessoas', PessoasController.index);
routes.get('/empresas', EmpresaController.index);
routes.get('/projetos', ProjetosController.index);

routes.post('/pessoas', PessoasController.create);
routes.post('/empresas', EmpresaController.create);
routes.post('/projetos', ProjetosController.create);

routes.put('/pessoas', PessoasController.update);
routes.put('/empresas', EmpresaController.update);
routes.put('/projetos', ProjetosController.update);

routes.delete('/pessoas/:id', PessoasController.delete);
routes.delete('/empresas/:id', EmpresaController.delete);
routes.delete('/projetos', ProjetosController.delete);

module.exports = routes;