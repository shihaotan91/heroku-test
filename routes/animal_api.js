var express = require('express')
var router = express.Router()
var Animal = require('../models/aniCreate')

router.get('/', function (req, res) {
  Animal.find({}, function (err, allAnimal) {
    res.json(allAnimal)
  })
})

router.post('/', function (req, res) {
  Animal.create(req.body.animal, function (err, newAnimal) {
    res.json(newAnimal)
  })
})

module.exports = router
