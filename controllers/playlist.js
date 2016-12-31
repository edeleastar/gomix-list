'use strict';

const _ = require('lodash');
const uuid = require('uuid');
const playListStore = require('../models/playlist-store');

const playlist = {
  show(request, response) {
    const playlistId = request.params.id;
    const viewData = {
      title: 'Playlist',
      playlist: playListStore.getPlaylist(playlistId),
    };
    response.render('playlist', viewData);
  },

  addSong(request, response) {
    const playlistId = request.params.id;
    const playlist = playListStore.getPlaylist(playlistId);
    const newSong = {
      id: uuid(),
      title: request.body.title,
      artist: request.body.artist,
    };
    playlist.songs.push(newSong);
    response.redirect('/playlist/' + playlistId);
  },

  deleteSong(request, response) {
    const playlistId = request.params.id;
    const songId = request.params.songid;
    const songs = playListStore.getPlaylist(playlistId).songs;
    _.remove(songs, function (song) {
      return song.id == songId;
    });

    response.redirect('/playlist/' + playlistId);
  },
};

module.exports = playlist;
