const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const gravarJson = require('./modules/escrever');
const lerJson = require('./modules/ler')


const pessoas = [
    {nome:'Diego',
    sobrenome: null},
    {nome:'Nicole',
    sobrenome:16324},
    {nome:'Nyu'},
    {nome:'Rin'},
    {nome:'Soma'},
]

//gravarJson(caminhoArquivo, JSON.stringify(pessoas, '', 2))

const lerArquivo = (async(caminhoArquivo)=>{
    let dados = await lerJson(caminhoArquivo)
    //return a;
    renderizaDados(dados);
})
//Lembrando sempre que usamos async await o que recebemos é uma promise então é hora de usar .then e .catch
//const leituraDoDado = lerArquivo(caminhoArquivo)
//.then(dadosDaLeitura => console.log(dadosDaLeitura))
//.catch(e => console.log('Error:', e));

//podemos chamar em outra função após o await assim só vai chegar nessa parte 
//depois do await


const renderizaDados=(dados)=>{
    console.log(dados);
    dados = JSON.parse(dados);
    console.log(dados);
}

lerArquivo(caminhoArquivo);

