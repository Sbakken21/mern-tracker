const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());


const PORT = process.env.PORT || 5000;
app.listen(PORT);