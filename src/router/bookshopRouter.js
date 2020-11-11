const controller = require('../controller/bookshopController')

const express = require('express')

const router = express.Router()

router.get('/:search', controller.getBySearch)
router.get('/livros', controller.getAllBooks)
router.post('/livros/adicionarlivro', controller.postBook)

module.exports = router