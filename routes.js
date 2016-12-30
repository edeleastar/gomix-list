'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const playlist = require('./controllers/playlist.js');
const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);

router.get('/playlist/:id', playlist.show);
router.post('/playlist/:id/addsong', playlist.addSong);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);

router.get('/about', about.index);

module.exports = router;
