'use strict';

const playlistCollection = require('../models/playlist-db.json').playlistCollection;

const dashboard = {
  index(request, response) {
    const viewData = {
      title: 'All Playlists',
      playlists: playlistCollection,
    };
    response.render('dashboard', viewData);
  },

};

module.exports = dashboard;
