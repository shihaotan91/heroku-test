var express = require('express')
var router = express.Router()
var Animal = require('../models/aniCreate')

router.get('/', function (req, res) {
  Animal.find({}, function (err, allAnimal) {
    res.json(allAnimal)
  })
})
module.exports = router
