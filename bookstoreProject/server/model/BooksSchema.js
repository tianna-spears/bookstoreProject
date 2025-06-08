const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    }, 
    author: {
        type: String,
        required: true
    }, 
    publishYear: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }
)

module.exports = new mongoose.model('Book', BooksSchema)