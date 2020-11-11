const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    isbn : { type : Number},
    id : { type : Number },
    name : { type : String },
    authorship : { type : String },
    publishingCompany : { type : String },
    release: { type : Number },
    genre : { type : String },
    available: { type : Boolean },
},{
    versionKey: false
})

const books = new mongoose.model('books', booksSchema)

module.exports = books