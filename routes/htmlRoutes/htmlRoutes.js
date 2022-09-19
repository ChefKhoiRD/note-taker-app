const router = require('express').Router();
const path = require('path');

// Homepage GET route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// Notes GET route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});


module.exports = router;