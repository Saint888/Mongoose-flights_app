
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
   airport: { type: String, 
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
   arrival: { type: Date},
   departs: { type: Date}
//    ts: {type: Date, required: true }, 
})

const Destination = mongoose.model('destinations', destinationSchema)

module.exports = Destination