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

  addPlaylist(request, response) {
    const newPlayList = {
      id: playlistCollection.length,
      title: request.body.title,
      songs: [],
    };
    playlistCollection.push(newPlayList);
    response.redirect('/dashboard');
  },

  deletePlaylist(request, response) {
    const playlistId = parseInt(request.params.id);
    playlistCollection.splice(playlistId, 1);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
