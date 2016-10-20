var express = require('express')
var router = express.Router()
var Animal = require('../models/aniCreate')

//GET
router.get('/', function (req, res) {

  // Signature of a Anima, find
  // Model.find({field}, callback(err, data))
  Animal.find({}, function (err, animalArr) {
    console.log(animalArr)

    res.render('animal/index', {
      animalArr: animalArr,
    })
  })
})

// router.get('/', function (req, res) {
//   res.render('animal/new')
// })

// .get('/:id', function (req, res) {
//   res.send('animal\'s ' + req.params.id + ' details')
// }).get('/:id/edit', function (req, res) {
//   res.send('edit animal\'s ' + req.params.id + ' details')
// })

//POST
//
router.post('/', function (req, res) {
  Animal.create(req.body.animal, function (err, newAnimal) {
    res.redirect('/animal')
  })
})

// router.post('/', function (req, res) {

  // var newAnimal = new Animal({
  //   breed: req.body.breed,
  //   family: req.body.family,
  //   name: req.body.name,
  //   gender: req.body.gender,
  //   date: req.body.date
  // })

  // newAnimal.save(function (err) {
  //   if (err) throw new Error(err)
  // })

//   Animal.post('/', function (req, res) {
//   Animal.create(req.body.animal, function (err, newAnimal) {
//     // res.redirect(index/)
//     res.redirect('animal/index')
//   })
// })

  // res.redirect('animal/index')

  // res.render('animal/new')
  // res.send(newAnimal)

// })

//PUT
// router.put('/:id', function (req, res) {
//   res.send('edit animal' + req.params.id)
// })
//
// //DELETE
// router.delete('/:id', function (req, res) {
//   res.send('delete animal' + req.params.id)
// })

module.exports = router
