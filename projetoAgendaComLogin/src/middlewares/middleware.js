
module.exports.meuMiddlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Passei no Middleware global');
    console.log();

    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;

    next();
}

module.exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
}

module.exports.csrfMiddleware = (req, res, next) => {
    //res.locals.csrfToken = req.csrfToken();
    res.locals.csrfToken = req.csrfToken() 
    next();
}

module.exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', 'Você precisa fazer login.')
        req.session.save(()=> res.redirect('/'))
        return;
    }
    next();
}