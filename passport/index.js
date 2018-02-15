const passport = require('passport');
const LocalStrategy = require('./localStrategy');

const User = require('../models/User');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  done(err, user);
});

passport.use(LocalStrategy);

module.exports = passport;
