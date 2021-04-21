const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('second Middleware for users');
    res.send('<p> Second users Middleware </p>');
})

app.use('/', (req, res, next) => {
    console.log('First Middleware');
    res.send('<p>  First Middleware  with / </p>');
})

app.listen(3000);