'use strict';

const sample = require('../models/playlist');

const playLists = {
  index(request, response) {
    const viewData = {
      title: 'Playlists',
      playlist: sample,
    };
    response.render('playlists', viewData);
  },
};

module.exports = playLists;
