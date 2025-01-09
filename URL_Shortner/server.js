const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/urlShortner', 
{
    dbName: 'urlShortner',
}
).then(() => {
    console.log('MongoDB connected');
})

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(7000, () => {
    console.log('Server is running on port 7000');
});