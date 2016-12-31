'use strict';

const uuid = require('uuid');
const playlistStore = require('../models/playlist-json-store');

const dashboard = {
  index(request, response) {
    const viewData = {
      title: 'All Playlists',
      playlists: playlistStore.getAllPlaylists(),
    };
    response.render('dashboard', viewData);
  },

  addPlaylist(request, response) {
    const newPlayList = {
      id: uuid(),
      title: request.body.title,
      songs: [],
    };
    playlistStore.addPlaylist(newPlayList);
    response.redirect('/dashboard');
  },

  deletePlaylist(request, response) {
    const playlistId = request.params.id;
    playlistStore.removePlaylist(playlistId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
