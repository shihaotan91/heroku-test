var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var User = require('../models/user')

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser((id, done), function() {
  User.findById(id, function(err, user){
    done(err, user)
  })
})

passport.use('local-signup', new LocalStrategy({
   usernameField: 'email',
   passwordField: 'password',
   passReqToCallBack: true
 }, function(req, email, password , done) {



}))
