const { GetTodosLivros } = require('../routes/services/livro')

function getLivros(req, res) {
    try {
        const livros = GetTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}