const express = require('express');
const app = express();

//         Criar   ler   atualizar  deletar
// CRUD => Create, Read,  Update,   Delete
//         POST    GET    PUT       DELETE

// http://meusite.com.br/ <= GET => entregue a pagina

//     rota    função
app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='nome'>
    <button> Enviar </button>
    </form>
    `);
});

app.post('/', (req, res)=>{
    res.send('Recebi o formulario');
})

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato conosco!')
})

app.get('/*', (req,res) => {
    res.send('Erro 404 página não encontrada')
})

app.listen(3000, (()=>{
    console.log('Acessar: http://localhost:3000');
    console.log('servidor executando na porta 3000');
}));