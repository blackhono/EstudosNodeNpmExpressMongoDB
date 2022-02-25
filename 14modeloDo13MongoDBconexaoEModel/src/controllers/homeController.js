const path = require('path');

//importamos o model para onde queremos usar ele
const {HomeModel} = require(path.resolve(__dirname, '..','models', 'HomeModel'));

// aqui recebemos o objeto para criar no banco de dados.
HomeModel.create({
    titulo: 'Título de teste',
    descricao: 'Descrição do teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

//caso eu queira ver os dados no db basta dar um find
HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));

module.exports.paginaInicial = (req, res) => {
    res.render('index');
}



module.exports.enviaFormulario = (req, res) => {
    res.send(req.body)
}