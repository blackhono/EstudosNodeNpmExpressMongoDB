
module.exports.paginaInicial = (req, res) => {
    res.locals.variavelLocal={
        titulo:'Titulo vindo da variavel local!',
        questao:[{qst: 'Cliente QST', input:'client'}]
    }
    //Digamos q nosso app é dinamico, voce vai receber um array de objetos de uma chamada do banco de dados
    //vai prencher uma const ou algo do tipo e montar em tela usando um for todas informações que vierem 
    //do jeito que vierem
    //tambem poderiamos enviar no render o objeto com valores.
    //res.render('index', {titulo:'titulo'}) porém fica só nessa pagina da para usar
    //isso nos middlewares.

    req.session.usuario = {nome: 'Diego', logado: true}
    console.log(req.session.usuario);
    
    //exemplo de Flash Messages
    //req.flash('Info', {ola:'Seja bem-vindo', info:'Backend montado por Diego'});
    //req.flash('Error', 'Deu erro');
    //req.flash('Success', 'foi um sucesso');

    //console.log(req.flash('Error'), req.flash('Success'), req.flash('Info')[0].info);
    


    res.render('index');
}

module.exports.enviaFormulario = (req, res) => {
    res.send(req.body)
}