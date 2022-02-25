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



//Após a conexão com o mongo vou criar a const da session e de onde vou armazenar
//a session no mongoDB

const session = require('express-session');
const MongoStorage = require('connect-mongo');
// mensagens
const flash = require('connect-flash');

const path = require('path');
const routes = require('./routes');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());
//csrf para cuidar dos meus submits protegendo de requisições de fora.



const { meuMiddlewareGlobal, checkCsrfError } = require(path.resolve(__dirname, 'src', 'middlewares', 'middleware'));


app.use(express.urlencoded({ extended: true }));

//para acessar um contéudo estático na pasta public
//para demonstração veja no link
//http://localhost:3000/teste.txt
app.use(express.static(path.resolve(__dirname, 'public')))
//console.log(__dirname)

//agora criamos o objeto com as options da sessão
const sessionOptions= {
    secret: 'segredoDoDiego',
    store: MongoStorage.create({mongoUrl:process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly: true,
    }
}

//agora que criamos a session podemos usar um recurso
//que utilizei no controller home 'paginaInicial'
app.use(session(sessionOptions));
app.use(csrf());
//mensagens tbm são usadas pelo sistema então...
app.use(flash());





app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//meu middleware antes de routes para passar em todas as rotas.
app.use(meuMiddlewareGlobal);
app.use(checkCsrfError);

app.use(routes);



app.on('conexaoEstabelecida', ()=>{
    app.listen(3000, (() => {
        console.log('Acessar: http://localhost:3000');
        console.log('servidor executando na porta 3000');
        console.log()
    }));
})