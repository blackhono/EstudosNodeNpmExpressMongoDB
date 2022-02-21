module.exports.paginaInicial = (req, res) => {
    res.send(`
        <form action='/' method='POST'>
        Nome: <input type='text' name='nome'>
        <button> Enviar </button>
        </form>
        `);
}



module.exports.enviaFormulario = (req, res) => {
    res.send(`
    <h1> Formulario Enviado </h1>
    <p>Dado enviado: ${req.body.name}</p>
    `)
}