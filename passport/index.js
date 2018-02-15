const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../models/User');

passport.serializeUser(function(user, done) {
  console.log('test');
  console.log('serializeUser called, user: ', user);
  done(null, { _id: user._id });
});

passport.deserializeUser(function(id, done) {
  console.log('DeserializeUser called')
  User.findOne(
    { _id: id },
    'username',
    (err, user) => {
      console.log('Deserialize user', user);
      done(null, user);
    }
  )
});

// Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
