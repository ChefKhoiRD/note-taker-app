// global require
const express = require('express');
const path = require('path');
const fs = require ('fs');
const db = require('./db.json');

// decalring app for express and giving it a port of 3001
const PORT = process.env.PORT || 3001;
const app = express();

// parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// linking public folder
app.use(express.static('public'));

// get route to main page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// get route to note page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// set app.listen to port declared at 3001
app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
);