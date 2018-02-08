const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('INDEX');
});

app.get('/about', (req,res) => {
    res.send('ABOUT');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);