require('dotenv').config();

const express = require('express');
const app = express();

//como queremos que a conexão ocorre antes de executar qualquer coisa vamos colocar
//um then e quando finalizar a conexão vou emitir um sinal de 'PRONTO'
//e usar isso como um sinal para o app rodar o servidor depois da conexão.
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('conexaoEstabelecida')
        console.log('Conexão com a base de dados OK')
    })
    .catch(e => console.log(e));


const path = require('path');
const routes = require('./routes');

//usei de desestruturação aqui pois eu posso colocar
//mais middlewares naquela mesma pasta e basta eu puxar pelo 
//nome deles.
const { meuMiddlewareGlobal } = require(path.resolve(__dirname, 'src', 'middlewares', 'middleware'));

app.use(express.urlencoded({ extended: true }));

//para acessar um contéudo estático na pasta public
//para demonstração veja no link
//http://localhost:3000/teste.txt
app.use(express.static(path.resolve(__dirname, 'public')))
//console.log(__dirname)

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//meu middleware antes de routes para passar em todas as rotas.
app.use(meuMiddlewareGlobal);

app.use(routes);



app.on('conexaoEstabelecida', ()=>{
    app.listen(3000, (() => {
        console.log('Acessar: http://localhost:3000');
        console.log('servidor executando na porta 3000');
        console.log()
    }));
})