const nome = 'Diego';
const sobrenome = 'Lepamar';

const falaNome = (() =>{
    return nome +' '+sobrenome
})
/* 
module.exports.nome = nome;
console.log(module)
 */

//outro jeito de fazer o module exports é apenas usar o exports

exports.NOME = nome;
exports.falaNome = falaNome;

// nesse contexto o this aponta para o module exports
this.CABELO = 'cacheado'
console.log(module.exports)

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    pessoaFala = () => {
        return(this.nome)
    }
}

exports.Pessoa = Pessoa;