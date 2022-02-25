module.exports.meuMiddlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Passei no Middleware global');
    console.log();
    //agora faremos uma interceptação em um dos campos do
    //formulário por exemplo! 
    //Não esquece que tem q usar o nome do input, nesse caso foi o
    // name = 'client'
    if(req.body.client){
        console.log(`Você postou esse cliente ${req.body.client}?`)
    }
    next();
}