const mongoose = require('mongoose')
const database = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true
        })
        console.log("Mongoose connected...")
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = connectDB