const express = require('express')
const RotaLivro = require('./src/routes/livro')

const app = express()
app.use(express.json())

app.use('/livros', RotaLivro)


const port = 8000
app.listen(port, () => {
    console.log('Executando servidor na porta 8000')
})