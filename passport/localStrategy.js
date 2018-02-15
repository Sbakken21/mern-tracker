const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
        });
    }
);

module.exports = strategy;