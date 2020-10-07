
// Onde chamamos todos os modelos e criamos os resultados para todos os métodos

const books = require( '../model/books.json' )
const collaborators = require( '../model/collaborators.json' ) 

const getAllBooks = ( req, res ) => {
        console.log('getAllBooks in progress')
    res.status(200).send(books)
}

const deleteBook = ( req, res ) => {
    // Encontrar o livro na const books pelo ID
    // Tirá-lo da array
    // Reescrever a array
        console.log('deleteBook in progress')
    res.status(200).send(books)
}

const getAllCollaborators = ( req, res ) => {
        console.log('getAllCollaborators in progress')
    res.status(200).send(collaborators)
}

const deleteCollaborator = ( req, res ) => {
    // Encontrar o colaborador na const collaborators
    // Tirá-lo da array
    // Reescrever a array
        console.log('deleteCollaborator in progress')
    res.status(200).send(collaborators)
}

const getBookByGenre = ( req, res ) => {
    // Encontrar os livros naquele gênero
    // Guardar os livros numa variável
        console.log('getBookByGenre in progress')
    res.status(200).send(booksByGenre)
}

const getAgeByID = ( req, res ) => {
    // Pegar o identificador do ID que traz o ano de nascimento
    // Guardar esse ID em uma variável
    // Calcular a idade, subtraindo o identificador pelo ano atual
    // Guardar o resultado numa variável
        console.log('getAgeByID in progress')
    res.status(200).send(collaboratorAge)
}

module.exports = { 
    getAllBooks, 
    deleteBook, 
    getAllCollaborators, 
    deleteCollaborator,
    getBookByGenre,
    getAgeByID
}