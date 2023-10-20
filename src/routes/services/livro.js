const fs = require('fs')


function GetTodosLivros() {
    const livros = JSON.parse(fs.readFileSync('src/data/livros.json'))
    return livros
}

module.exports = {
    GetTodosLivros
}