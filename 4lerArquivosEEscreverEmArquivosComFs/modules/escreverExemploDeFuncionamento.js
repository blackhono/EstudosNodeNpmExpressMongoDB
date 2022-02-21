const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..','teste.json');

//pode ser com txt também por exemplo.
//const caminhoArquivo = path.resolve(__dirname, '..','teste.txt');

//utf8 é o padrão porém fica ai como demonstrativo que pode ser usado outro.
//fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf8'});

//usando alguns tipos de variaveis no json para exemplificação
const pessoas = [
    {nome:'Diego',
    sobrenome: null},
    {nome:'Nicole',
    sobrenome:16324},
    {nome:'Nyu'},
    {nome:'Rin'},
    {nome:'Soma'},
]
//const json = JSON.stringify(pessoas)

//o json stringify com formatação ajuda muito na visualização do json 
// e a Flag nas opções do fs.writeFile serve para definir duas coisas
// flag : 'a' (cria um novo testo no json mantendo o anterior)
// flag : 'w' (apaga o contéudo anterior e adiciona o novo);

fs.writeFile(caminhoArquivo, JSON.stringify(pessoas, '', 2), { flag: 'w'});

