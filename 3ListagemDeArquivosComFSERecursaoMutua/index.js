const fs = require('fs').promises;
const path = require('path');

//com promise
//fs.readdir(path.resolve(__dirname))
//.then(files =>  console.log(files))
//.catch(e => console.log(e));

//com async await
//com um caminho 
const readdir = (async(rootDir) => {
    rootDir = rootDir || path.resolve(__dirname);
    //console.log(rootDir);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
})

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        //console.log(file, stats.isDirectory())
        
        //vamos ignorar quando for a pasta do git certo!
        if(/\.git/g.test(fileFullPath)) continue;

         //bom podemos ignorar a pasta do node_modules!
         if(/node_modules/g.test(fileFullPath)) continue;

        //recursividade para chamar novamente e ver os arquivos de dentro da pasta
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        //filtro para mostrar apenas arquivos CSS, então se o arquivo não for css ele volta ao for!.
        if(!/\.css/g.test(fileFullPath)) continue;

        //filtro para mostrar apenas arquivos Html
        //if(!/\.html/g.test(fileFullPath)) continue;

        //console.log(fileFullPath)
        console.log(file)
    }
}
readdir(path.resolve(__dirname,'..'));

// rootDir é o caminho da pasta, e file passa o nome do arquivo dentro da pasta sendo arquivo, png, pastas...
// então usamos o fs.stat para pegar os 'estatos'então usamos um método dos stats que é o isDirectory();
// para saber se o arquivo é uma pasta ou não 
// E com recursividade podemos explorar os arquivos de dentro das pastas

//REFORÇANDO quando usamos CONTINUE dentro do for estamos dizendo para voltar ao for (é como um break só q ele não para o for, 
// ele apenas não continua aquele ponto do loop e vai para o proximo ponto do loop)

/* 

    if(stats.isDirectory()){
                readdir(fileFullPath);
                continue;
            }

*/




/* 
    outras maneiras de montar essa função readdir 

    const readdir = async(rootDir) => {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

    async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}
*/