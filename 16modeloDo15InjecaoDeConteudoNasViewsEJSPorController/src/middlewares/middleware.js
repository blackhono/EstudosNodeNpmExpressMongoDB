module.exports.meuMiddlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Passei no Middleware global');
    console.log();

    res.locals.variavelLocalMeuMiddleware=`<p style="color:red; font-size: 0.5em">Variavel local do meu middleware GLOBAL!</p>`

    if(req.body.client){
        console.log(`Você postou esse cliente ${req.body.client}?`)
    }
    next();
}