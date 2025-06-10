require('dotenv').config()

const express= require('express')
const app= express();
const PORT= process.env.PORT || 5000;
const connectDB= require('./database/connectDB')
const BooksSchema = require('./model/BooksSchema')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the MERN Stack Tutorial')
})

// Get All Books
app.get('/books', async (req, res) => {
    const getAllBooks= await BooksSchema.find()

    if (!getAllBooks.length) {
        console.log(error)
        return res.status(404).json({ message: 'No books found.' })
    } 
        console.log('Book successfully created!')
        res.status(200).json({
            data: getAllBooks,
            count: getAllBooks.length     
        })
})

// Get Book By Id
app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const getBookByID= await BooksSchema.findById( id )

    if (!getBookByID) {
        return res.status(400).json({ message: `Book with id ${id} does not exist.` })
    }
        res.status(200).json({getBookByID})
})

// Create(Save) A New Book
app.post('/books', async (req, res) => {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
        return res.status(404).send({ message: 'Please fill out all required fields: title, author, and publishYear.' })
    } else {
        const createBooks = await BooksSchema.create({ title, author, publishYear })
        res.status(201).json(createBooks)
    }
})

// Update a book 
app.patch('/books/:id', async (req, res) => {
    const { title, author, publishYear } = req.body;
        const { id } = req.params;

    if (!title || !author || !publishYear) {
        res.status(400).json({ message: 'Please fill out all required fields: title, author, and publishYear.' })
    } 

    try {
    const updateBook = await BooksSchema.findByIdAndUpdate(id, req.body)

    if(!updateBook) {
        res.send(404).json({  message: 'Book not found!'})
    }
    res.status(200).send({  message: 'Book updated successfully!'})
} catch {
    res.status(500).json({ message: 'Server error'})
        } 
    }
)

// Delete book
app.delete('/book/:id', async (req, res) => {
    const { id } = req.params;
    const deleteBook = await BooksSchema.findByIdAndDelete( id )

    if (!deleteBook) {
        res.status(404).send({ message: `Book with id ${id} not found.`})
    }
    res.status(200).send('Book deleted successfully.')
})


app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
    connectDB()
})