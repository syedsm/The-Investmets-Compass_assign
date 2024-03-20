const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courseName: String,
    coursePrice: String,
    courseDescription: String,
    thumbnail:String,
})

module.exports = mongoose.model('course', courseSchema)