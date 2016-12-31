'use strict';

const uuid = require('uuid');
const playlistStore = require('../models/playlist-store');

const playlist = {
  show(request, response) {
    const playlistId = request.params.id;
    const viewData = {
      title: 'Playlist',
      playlist: playlistStore.getPlaylist(playlistId),
    };
    response.render('playlist', viewData);
  },

  addSong(request, response) {
    const playlistId = request.params.id;
    const playlist = playlistStore.getPlaylist(playlistId);
    const newSong = {
      id: uuid(),
      title: request.body.title,
      artist: request.body.artist,
    };
    playlistStore.addSong(playlistId, newSong);
    response.redirect('/playlist/' + playlistId);
  },

  deleteSong(request, response) {
    const playlistId = request.params.id;
    const songId = request.params.songid;
    const songs = playlistStore.removeSong(playlistId, songId);
    response.redirect('/playlist/' + playlistId);
  },
};

module.exports = playlist;
