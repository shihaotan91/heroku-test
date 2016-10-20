var express = require('express')
var router = express.Router()
var User = require('../models/userCreate')

router.get('/', function (req, res) {
  User.find({}, function (err, allUser) {
    res.json(allUser)
  })
})


router.post('/', function (req, res) {
  // res.json(req.body)
  User.create(req.body.user, function (err, userArr) {
    // console.log('new user created')
    res.json(userArr)
  })
})

// router.posgt('/', function (req, res) {
//   // res.json(req.body)
//   User.create(req.body.user, function (err, savedUser) {
//     console.log('new user created')
//     res.json(savedUser)
//   })
// })

module.exports = router
