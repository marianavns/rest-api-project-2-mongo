
// Onde chamamos todos os modelos e criamos os resultados para todos os métodos

const books = require( '../model/books.json' )
const collaborators = require( '../model/collaborators.json' ) 

const getAllBooks = ( req, res ) => {
    res.status(200).send(books)
}

const deleteBook = ( req, res ) => {
    // Encontrar o livro na const books pelo ID
    // Tirá-lo da array
    // Reescrever a array
    res.status(200).send(books)
}

const getAllCollaborators = ( req, res ) => {
    res.status(200).send(collaborators)
}

const deleteCollaborator = ( req, res ) => {
    // Encontrar o colaborador na const collaborators
    // Tirá-lo da array
    // Reescrever a array
    res.status(200).send(collaborators)
}

const getBookByGenre = ( req, res ) => {
    // Encontrar os livros naquele gênero
    // Guardar os livros numa variável
    res.status(200).send(booksByGenre)
}

const getAgeByID = ( req, res ) => {
    const actualYear = 2020
        const id = req.params.id
        const filtered = collaborators.find((param) => param.id == id)
        const name = filtered.name
        const yearBirth = filtered.id.slice(3, -2)
    const age = actualYear - yearBirth
res.status(200).send(`A pessoa com o id ${id} se chama ${name} tem ${age} anos.`)
}

module.exports = { 
    getAllBooks, 
    deleteBook, 
    getAllCollaborators, 
    deleteCollaborator,
    getBookByGenre,
    getAgeByID
}