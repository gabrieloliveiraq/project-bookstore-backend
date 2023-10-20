const express = require('express')
const RotaLivro = require('./src/routes/livro')

const app = express()
port = 8000

app.use('/livros', RotaLivro)


app.listen(port, () => {
    console.log('Executando servidor na porta 8000')
})