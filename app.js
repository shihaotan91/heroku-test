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
var dotenv = require('dotenv')

var flash = require('connect-flash')
var session = require('express-session')

// mongoose.connect('mongodb://localhost/animalshelter')
dotenv.load({ path: '.env.' + process.env.NODE_ENV })
mongoose.connect(process.env.MONGO_URI)

mongoose.Promise = global.Promise

app.use(express.static(__dirname + '/public'))


// if(process.env.NODE_ENV === 'production'){
//  mongoose.connect('mongodb://chaotarroo:dukemonvsme@ds019633.mlab.com:19633/chaotarroo')
// } else {
//  mongoose.connect('mongodb://localhost/animalshelter')
// }

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)
app.engine('ejs', require('ejs').renderFile)

app.use(session({secret: process.env.EXPRESS_SECRET}))
app.use(flash())

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

var user_routes = require('./routes/user')
var user_api_routes = require('./routes/user_api')

// var userRouteuser = require('./routes/user')
// var user_api_routes = require('./routes/user_api')

app.use('/animal', animal_routes)
app.use('/api/animal', animal_api_routes)

app.use('/user', user_routes)
app.use('/api/user', user_api_routes)

app.listen(process.env.PORT || 4000)
console.log('Server running at http://localhost:' + port + '/')
