const fs = require('fs')


function GetTodosLivros() {
    const livros = JSON.parse(fs.readFileSync('src/data/livros.json'))
    return livros
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('src/data/livros.json'))
    const livroFiltrado = livros.filter(livro => livro.id == id)
    return livroFiltrado
}

function inserirLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('src/data/livros.json'))
    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("src/data/livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(midifications, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('src/data/livros.json'))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...midifications }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('src/data/livros.json', JSON.stringify(livrosAtuais))
}

function deletarLivro(id) {
    const livros = JSON.parse(fs.readFileSync('src/data/livros.json'))
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('src/data/livros.json', JSON.stringify(livroFiltrado))
}

module.exports = {
    GetTodosLivros,
    getLivroPorId,
    inserirLivro,
    modificaLivro,
    deletarLivro
}