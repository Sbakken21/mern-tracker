// Router for authentication

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../passport');
const crypto = require('crypto');
const Mailer = require('../middlewares/Mailer');
const resetTemplate = require('../middlewares/emailTemplates/resetTemplate');

// Route to get user info
router.get('/user', (req, res) => {
    res.send(req.user);
    console.log(req.user);
});

// Signup
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username }, (err, existingUser) => {
        if (err) { return next(err); }

        // If a user with username already exists, return error
        if (existingUser) {
            return res.json({
                error: `Username is already registered`
            });
        }

        // Create and save user record
        const newUser = new User({
            username: username,
            password: password
        });

        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        })

    })
});

// Login
router.post(
    '/login',
    function(req, res, next) {
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        const userInfo = {
            username: req.user.username
        };
        res.json(userInfo);
    }
);

// Forgot password
router.post('/forgot', (req, res) => {

    // Send email
    const mailer = new Mailer(req.body.email, resetTemplate());
    mailer.send();


    res.send(req.body);
});

// Logout
router.get('/logout', (req, res) => {
    console.log('user is now logged out')
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;