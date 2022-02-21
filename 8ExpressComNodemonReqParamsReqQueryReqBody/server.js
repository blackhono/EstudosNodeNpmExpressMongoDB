const express = require('express');
const app = express();

//tratamento body (da linha 50)

app.use(express.urlencoded({extended:true}))

//exemplo de params 
//                ? é para iniciar o query string
// /profiles/12345?
//                      & para mais querys strings
// campanha=googleleads&nome_campanha=campanhagoogle

//CUIDADO USAR PARANS PARA DADOS SENSIVEIS pois os dados ficam salvos na navegação!
//só mande dados sensiveis atraves de corpo de requisição, ok!


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

//é bem interessante no caso de passar id de um profile por exemplo.
//para testar esse get de teste basta esse exemplo:
//http://localhost:3000/testes/123/nicole
//E caso queira q o parametro seja opcional basta encerrar ele com interrogação '?'
app.get(`/testes/:idUsuario?/:nomeUsuario?`, (req, res)=>{
    console.log('Params:', req.params)
    //tambem podemos obter o req.query
    //use: http://localhost:3000/testes/123/nicole?sobrenome=ikeda
    //e para ver em tela só usar 
    //res.send(req.query.sobrenome) 
    console.log('query:', req.query)
    res.send(req.params)
})

app.post('/', (req, res)=>{
    //se não houver um tratamento no req.body ele não vai ser apresentado linha 6
    //as informações apresentadas aqui pegam o NAME dos inputs do formúlario como identificador
    //no nosso formulario temos o input 'nome' para acessar exatamente ele no console.log
    //ficaria console.log(req.body.nome) 'checar linha 28' 

    console.log('Corpo da requisição',req.body);
    res.send(`Recebi o formulario com esses dados: ${req.body.nome}`);
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