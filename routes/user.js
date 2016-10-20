var express = require('express')
var router = express.Router()
var User = require('../models/userCreate')

//GET
router.get('/', function (req, res) {
  User.find({}, function (err, userArr) {
    console.log(userArr)

    res.render('user/index', {
    userArr: userArr,
    })
  })
})

router.get('/login', function (req, res) {
  res.render('user/login', {message: req.flash('loginMessage')})
})

router.post('/login', function (req, res) {
  var user = req.body.user

  User.findOne({ 'local.email': user.local.email }, function (err, foundUser) {
    if (err) res.send(err.message)

    if (foundUser) {
      foundUser.authenticate(user.local.password, function (err, authenticated) {
        console.log(authenticated)
        if (err) res.send(err)

        if (authenticated) {
          res.redirect('/profile')
        } else {
          res.redirect('/error')
        }
      })
    } else {
      req.flash('loginMessage', 'Email not found!')
      res.redirect('/user/login')
    }
  })
})


router.get('/error', function(req, res) {
  res.render('user/error')
})

router.get('/profile', function(req, res) {
  res.render('user/profile')
})


module.exports = router
