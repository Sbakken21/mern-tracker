const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const auth = require('./routes/authRoutes');
const passport = require('./passport');

// DB connection
mongoose.connect(keys.mongoURI);

const app = express();

// logging
app.use(morgan('dev'));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Sessions
app.use(session({
    secret: keys.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', auth);

// Production Environment - use appropriate routes
if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);