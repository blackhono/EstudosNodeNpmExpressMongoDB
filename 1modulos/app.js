const mod1 = require('./mod1')

console.log(mod1);
console.log(mod1.falaNome());

//também posso armazenar o que veio do modulo em um a variavel por exemplo.

const falaNome = mod1.falaNome;

console.log(falaNome())


//tambem podemos fazer a chamada do modulo pelo que queremos dele e ficaria assim:
//
// const { nome, sobrenome, falaNome } = require('./mod1');
//
//no exemplo a baixo estou pegando apenas a classe

const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Nicole');

console.log(p1.pessoaFala())

// caso fosse import de algo instalado no node ou pacotes
// importaria dessa maneira:
// const path = require('path');
// 
//outro exemplo com axios:
// const axios = require('axios');
