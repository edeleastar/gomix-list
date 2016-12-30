'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const playLists = require('./controllers/playlists.js');
const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/playlists', playLists.index);
router.get('/playlist/:id', playLists.list);
router.get('/about', about.index);

module.exports = router;
