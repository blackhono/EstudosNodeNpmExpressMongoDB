//Mudamos o para render para renderizar o arquivo que queremos no caso nossa VIEW
//lembrando q o render está puxando o caminho absoluto lá do server.js
//aqui: app.set('views',path(__dirname,'src','views'));

//No caso de Middlewares nós poderiamos usar após o req, res o NEXT
//(req, res, next) 
module.exports.paginaInicial = (req, res) => {
    res.render('index');
}



module.exports.enviaFormulario = (req, res) => {
    res.send(req.body)
}