const express = require('express')

const app = express()
port = 8000

app.get('/', (req, res) => {
    res.send('Executando um servidor com express.')
})

app.listen(port, () => {
    console.log('Executando servidor na porta 8000')
})