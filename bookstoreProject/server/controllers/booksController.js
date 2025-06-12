const express = require('express')
const app = express()
const BooksSchema = require('../model/BooksSchema')

// Get All Books
const getAllBooks = async (req, res) => {
    const getBooks= await BooksSchema.find()

    if (!getBooks.length) {
        console.log(error)
        return res.status(404).json({ message: 'No books found.' })
    } 
        res.status(200).json({
            data: getBooks,
            count: getBooks.length     
        })
}

// Get Book By Id
const getBookById= async (req, res) => {
    const { id } = req.params;
    const getbyId= await BooksSchema.findById( id )

    if (!getbyId) {
        return res.status(400).json({ message: `Book with id ${id} does not exist.` })
    }
        res.status(200).json(getbyId)
}

// Create(Save) A New Book
const createNewBook = async (req, res) => {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
        return res.status(404).send({ message: 'Please fill out all required fields: title, author, and publishYear.' })
    } else {
        const createBooks = await BooksSchema.create({ title, author, publishYear })
        res.status(201).json(createBooks)
    }
}

// Update a book 
const updateBook = async (req, res) => {
    const { title, author, publishYear } = req.body;
        const { id } = req.params;

    if (!title || !author || !publishYear) {
        res.status(400).json({ message: 'Please fill out all required fields: title, author, and publishYear.' })
    } 

    try {
    const updateABook = await BooksSchema.findByIdAndUpdate(id, req.body)

    if(!updateABook) {
        res.status(404).json({  message: 'Book not found!'})
    }
    res.status(200).send({  message: 'Book updated successfully!'})
} catch {
    res.status(500).json({ message: 'Server error'})
        } 
    }


// Delete book
const deleteBook= async (req, res) => {
    const { id } = req.params;
    const deleteABook = await BooksSchema.findByIdAndDelete( id )

    if (!deleteABook) {
        res.status(404).send({ message: `Book with id ${id} not found.`})
    }
    res.status(200).send('Book deleted successfully.')
}

module.exports = { 
    getAllBooks, 
    getBookById, 
    createNewBook, 
    updateBook, 
    deleteBook } ;