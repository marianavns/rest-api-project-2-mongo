const books = require( '../model/books.js' )

const fs = require('fs')

const getAllBooks = (req, res) => {
    books.find(function (err, books) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(books)
        }
    })
}

const getBySearch = (req, res) => {
    const search = req.query
    books.find(search, function (err, books) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            console.log(`Você fez uma busca.`)
            res.status(200).send(books)
        }
    })
}   

const postBook = (req, res) => {
    let book = new books(req.body)
    book.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message : "livro incluído com sucesso"})
        }
    })
}

const deleteBook = (req, res) => {
    const id = req.params.id
    books.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "livro removido com sucesso"})
        }
    })
}

const deleteBookbyMongoID = (req, res) => {
    const id = req.params._id
    books.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "livro removido com sucesso"})
        }
    })
}

module.exports = { 
    getBySearch,
    getAllBooks,
    postBook,
    deleteBook,
    deleteBookbyMongoID
}