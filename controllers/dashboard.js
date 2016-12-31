'use strict';

const uuid = require('uuid');
const playListStore = require('../models/playlist-store');

const dashboard = {
  index(request, response) {
    const viewData = {
      title: 'All Playlists',
      playlists: playListStore.getAllPlaylists(),
    };
    response.render('dashboard', viewData);
  },

  addPlaylist(request, response) {
    const newPlayList = {
      id: uuid(),
      title: request.body.title,
      songs: [],
    };
    playListStore.addPlaylist(newPlayList);
    response.redirect('/dashboard');
  },

  deletePlaylist(request, response) {
    const playlistId = request.params.id;
    playListStore.removePlaylist(playlistId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
