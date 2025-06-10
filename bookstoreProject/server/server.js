require('dotenv').config()

const express= require('express')
const app= express();
const PORT= process.env.PORT || 5000;
const connectDB= require('./database/connectDB')
const booksRoute= require('./routes/booksRoute')

// middleware
app.use(express.json())

// setup router
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Stack Tutorial')
})

app.use('/books', booksRoute)

// start server
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
    connectDB()
})