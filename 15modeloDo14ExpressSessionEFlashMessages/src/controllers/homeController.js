
module.exports.paginaInicial = (req, res) => {
    //passando o usario na session que configurei para 7 dias
    //para teste pode comentar o código a baixo e usar
    //apenas o console.log(req.session.usuario) que
    //você vera o mesmo resultado que foi salvo
    req.session.usuario = {nome: 'Diego', logado: true}
    console.log(req.session.usuario);
    
    //exemplo de Flash Messages
    req.flash('Info', {ola:'Seja bem-vindo', info:'Backend montado por Diego'});
    req.flash('Error', 'Deu erro');
    req.flash('Success', 'foi um sucesso');
    //apesar que atualmente é mais interessante montar um objeto de mensagens 
    //trazer isso do db... Mas depende da utilização ok?! ok!

    console.log(req.flash('Error'), req.flash('Success'), req.flash('Info')[0].info);
    


    res.render('index');
}

module.exports.enviaFormulario = (req, res) => {
    res.send(req.body)
}