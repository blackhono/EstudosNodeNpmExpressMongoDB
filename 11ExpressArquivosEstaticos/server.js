const express = require('express');
const app = express();
//só para ajudar com o caminho usando o absoluto como de costume.
const path = require('path');

const routes = require('./routes');

app.use(express.urlencoded({extended:true}));

//tem varias engines que podemos usar, mas o que mais se aproxima de html no nosso caso
//é o ejs;
//       tipo           caminho
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, (()=>{
    console.log('Acessar: http://localhost:3000');
    console.log('servidor executando na porta 3000');
}));