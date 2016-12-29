'use strict';

const playlists = require('../models/playlist');

const playLists = {
  index(request, response) {
    const viewData = {
      title: 'Playlists',
      playlists: playlists,
    };
    response.render('playlists', viewData);
  },
};

module.exports = playLists;
