
// Onde relacionamos as rotas

const controller = require('../controller/bookstoreController')

const express = require('express')

const router = express.Router()


router.get('/livros', controller.getAllBooks)
router.delete('/:id', controller.deleteBook)
router.get('/colaboradores', controller.getAllCollaborators)
router.delete('/colaborador/:id', controller.deleteCollaborator)

router.get('/livros/:genre', controller.getBookByGenre)
router.get('/idade/:id', controller.getAgeByID)

module.exports = router