
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({
   airline: { type: String, 
    enum: ['American', 'Southwest', 'United']},
   flightNo: { type: Number, min: 10, max: 99999},
   departs: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))},
   destinations: [{
        type: mongoose.Types.ObjectId,
        Ref: 'Destination'
    }]
//    ts: {type: Date, required: true }, 
})

const Flight = mongoose.model('flights', flightSchema)

module.exports = Flight



// var numberschema = new mongoose.Schema({
//     n: {type: Number, min: min, max: max}
//  });