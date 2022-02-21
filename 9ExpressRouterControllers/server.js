const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.urlencoded({extended:true}))

//aqui pedimos para o app usar as nossas rotas
app.use(routes);

app.listen(3000, (()=>{
    console.log('Acessar: http://localhost:3000');
    console.log('servidor executando na porta 3000');
}));