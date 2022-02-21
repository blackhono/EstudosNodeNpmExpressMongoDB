//Mudamos o para render para renderizar o arquivo que queremos no caso nossa VIEW
//lembrando q o render está puxando o caminho absoluto lá do server.js
//aqui: app.set('views',path(__dirname,'src','views'));
module.exports.paginaInicial = (req, res) => {
    res.render('index');
}



module.exports.enviaFormulario = (req, res) => {
    res.send(`
    <h1> Formulario Enviado </h1>
    <p>Dado enviado: ${req.body.name}</p>
    `)
}