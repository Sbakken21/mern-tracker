const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../passport');

// Route to get user info
router.get('/test', (req,res) => {
    res.send({ success: 'true' });
})


router.get('/user', (req,res, next) => {
    if (req.user) {
        return res.json({ user: req.user })
    } else {
        return res.json({ user: null })
    }
});

// Signup
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username }, (err, existingUser) => {
        if (err) { return next(err); }

        // If a user with username already exists, return error
        if (existingUser) {
            return res.json({
                error: `Username: ${username} is already registered`
            });
        }

        // Create and save user record
        const newUser = new User({
            username: username,
            password: password
        });

        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(newUser);
        })

    })
})

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
        res.send(userInfo);
    }
);

// Logout
router.post('/logout', (req, res) => {
    if (req.user) {
        res.send({ msg: 'logging out'})
    } else {
        res.send({ msg: 'no user to log out'})
    }
});

module.exports = router;