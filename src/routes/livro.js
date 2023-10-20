const { Router } = require('express')
const { getLivros } = require('../controllers/livro')
const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('requisição post')
})

router.patch('/', (req, res) => {
    res.send('requisição patch')
})

router.delete('/', (req, res) => {
    res.send('requisição delete')
})

module.exports = router