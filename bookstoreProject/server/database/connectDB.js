require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
    mongoose.connect(process.env.MONGO_DB)
    console.log('Database is connected!')
    } catch(err) {
        console.log('Error connecting to the database :(')
    }
}

module.exports = connectDB;