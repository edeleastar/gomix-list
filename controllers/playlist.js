'use strict';

const playlistCollection = require('../models/playlist-db.json').playlistCollection;

const playlist = {
  show(request, response) {
    const playlistId = parseInt(request.params.id);
    const viewData = {
      title: 'Playlist',
      playlist: playlistCollection[playlistId],
    };
    response.render('playlist', viewData);
  },

  addSong(request, response) {
    const playlistId = parseInt(request.params.id);
    const list = playlistCollection[playlistId];
    const newSong = {
      id: list.songs.length,
      title: request.body.title,
      artist: request.body.artist,
    };
    list.songs.push(newSong);
    response.redirect('/playlist/' + playlistId);
  },

  deleteSong(request, response) {
    const playlistId = parseInt(request.params.id);
    const songId = parseInt(request.params.songid);
    const songs = playlistCollection[playlistId].songs;
    songs.splice(songId, 1);
    response.redirect('/playlist/' + playlistId);
  },
};

module.exports = playlist;
