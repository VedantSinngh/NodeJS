const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/",
    {
        "dbName":"NodeJSMastery",
    }
).then( () => {
    console.log('Connected to MongoDB');
}).catch( (err) => {
    console.log('Error: ', err);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});  