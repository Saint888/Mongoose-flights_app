const Flight = require('../models/flightModel')
// const Comments = require('../models/commentModel')
// const posts = require('../models/posts')


module.exports.index = async (req, res) => {
    // const flights = await Flight.find().sort({ createdAt: 1 })
    try {
        const flightData = await Flight.find()
        res.render('mongoose/Index', {flight: flightData})
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

// Create to add new flights 
module.exports.new = async (req, res) => {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departDate = dt.toISOString().slice(0,16);
    res.render('mongoose/New', {departDate});
}

module.exports.show = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id)
        res.render('mongoose/Show', { flight })
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
    
}

module.exports.create = async (req, res) => {
    try {
       await Flight.create(req.body);
   }catch (err){
       console.log(err);
       res.send(err.message)
   }
   res.redirect('/flights')
   
   }







