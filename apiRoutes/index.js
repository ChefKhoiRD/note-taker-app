const router = require('express').Router();
const apiRoute = require('./apiRoute');

router.use(apiRoute);

module.exports = router;