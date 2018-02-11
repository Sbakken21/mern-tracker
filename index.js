const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// logging
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT);