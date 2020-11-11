const mongoose = require('mongoose')

const collaboratorsSchema = new mongoose.Schema({
    id : { type : Number},
    name : { type : String },
    sector : { type : String },
    occupation : { type : String },
    workschedule : { type : String },
    inTraining: { type : Boolean },   
},{
    versionKey: false
})

const collaborators = new mongoose.model('collaborators', collaboratorsSchema)

module.exports = collaborators