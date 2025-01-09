const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.render('index');
    });

// jab data bhejte ho to hota hai post request
app.post('/form-submit', (req,res) => {
    console.log(req.body);
    res.json({
        message: 'Data received',
        data: req.body
    })
    });

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
    });