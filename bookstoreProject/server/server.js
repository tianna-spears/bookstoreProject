require('dotenv').config()

const express= require('express')
const app= express();
const PORT= process.env.PORT || 5000;
const connectDB= require('./database/connectDB')
const booksRoute= require('./routes/booksRoute')
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:5000',
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

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