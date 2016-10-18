var mongoose = require('mongoose')

// create a schema for animal model

var animalSchema = new mongoose.Schema({
   breed: String,
   family: String,
   name: String,
   gender: String,
   date: String,
})

var Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
