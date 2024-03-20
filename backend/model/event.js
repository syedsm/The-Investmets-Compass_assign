const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventName: String,
    eventDescription: String,
    eventStartDate: String,
    thumbnail:String,
})

module.exports = mongoose.model('event', eventSchema)