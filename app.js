var express = require('express')
var path = require('path')
var debug = require('debug')
var logger = require('morgan')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var router = express.Router()
var port = 4000

// mongoose.connect('mongodb://localhost/animalshelter')
mongoose.Promise = global.Promise

if(process.env.NODE_ENV === 'production'){
 mongoose.connect('mongodb://chaotarroo:dukemonvsme@ds019633.mlab.com:19633/chaotarroo')
} else {
 mongoose.connect('mongodb://localhost/animalshelter')
}

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// ############ YOU CAN ADD YOUR CODE BELOW

var animal_routes = require('./routes/animal')
var animal_api_routes = require('./routes/animal_api')

// var userRoutes = require('./routes/user')
// var user_api_routes = require('./routes/user_api')

app.use('/animal', animal_routes)
app.use('/api/animal', animal_api_routes)

// app.use('/users', userRoutes)
// app.use('/api/users', user_api_routes)

app.listen(process.env.PORT || 4000)
console.log('Server running at http://localhost:' + port + '/')
