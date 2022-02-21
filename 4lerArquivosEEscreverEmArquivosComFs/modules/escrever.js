const fs = require('fs').promises;

module.exports = ((caminho, objeto)=> {
    fs.writeFile(caminho, objeto, { flag: 'w'});
})

