const express = require('express')
const router = express.Router()
const { 
    getAllBooks, 
    getBookById, 
    createNewBook, 
    updateBook, 
    deleteBook } = require('../controllers/booksController')

// Get All Books
router.get('/', getAllBooks)

// Get Book By Id
router.get('/:id', getBookById)

// Create New Book
router.post('/', createNewBook)

// Update a Book 
router.patch('/:id', updateBook)

// Delete Book
router.delete('/:id', deleteBook)

module.exports = router;