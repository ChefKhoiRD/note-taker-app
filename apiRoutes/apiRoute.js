const router = require('express').Router();
const fs = require('fs');

// API notes GET route
router.get('/api/notes', (req, res) => {

    // Use fs to read data stored in database
    fs.readFile('./db/db.json', (err, data) => {

        // Error handling
        if (err) throw err;

        // Parse data and return notes JSON response 
        let notes = JSON.parse(data)
        res.json(notes)
    })
});

// API notes POST route
router.post('/api/notes', (req, res) => {

    // Note data - requires a title and text
    let notes = {
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('./db/db.json', (err, data) => {

        let notesArray;

        // Parse data to note array and push data to array
        notesArray = JSON.parse(data)

        notesArray.push(notes)

        // Use fs to stringify note data into database
        fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) => {

            // Error handling
            if (err) throw err;

            // Response send success when post is successful
            res.send('success')
        })
    })
});

module.exports = router;