const mongoose = require('mongoose')

const regSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('reg', regSchema)