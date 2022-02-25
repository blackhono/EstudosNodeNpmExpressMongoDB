const express = require('express');
const route = express.Router();

//aqui em routes temos o controle das rotas
//então fazemos o import dos controllers aqui

const homeController = require('./src/controllers/homeController');
const errorController = require('./src/controllers/errorController');


//Rotas Home
//Metódos GET

route.get('/', homeController.paginaInicial);
//Metódos POST
route.post('/',homeController.enviaFormulario);

//Rotas Erro
//Metódos GET
route.get('/*', errorController.notFind);


module.exports = route;
