const books = require( '../model/books.js' )
// const collaborators = require( '../model/collaborators.js' )

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

module.exports = { 
    getBySearch,
    getAllBooks,
    postBook
}