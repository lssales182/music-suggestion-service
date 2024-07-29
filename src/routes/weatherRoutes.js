
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/playlist', weatherController.getPlaylistByCity);

module.exports = router;
            