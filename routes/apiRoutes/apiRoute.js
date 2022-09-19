const router = require('express').Router();
const fs = require('fs');

const noteDb = require('../../db/db.json');

// Create note function

// TODO DATA HAS A NODEJS ERROR AND IS UNDEFINED
const createNote = (newNote) => {
    fs.readFile(noteDb, (data) => {
        
        // Parse data to note array and push data to array
        let notesArray = JSON.parse(data)

        notesArray.push(newNote)

        // Use fs to stringify note data into database
        fs.writeFile(noteDb, JSON.stringify(notesArray))
    })
};

// API notes GET route
router.get('/api/notes', (req, res) => {

    // Use fs to read data stored in database
    fs.readFile(noteDb, (data) => {
        res.send(data)
    })
});

// API notes POST route
router.post('/api/notes', (req, res) => {

    // Note data - requires a title and text
    let notes = {
        title: req.body.title,
        text: req.body.text
    }

    // Run create note function using noteData 
    createNote(notes);

});

module.exports = router;