'use strict';

const _ = require('lodash');

const playlistStore = {

  playlistCollection: [], //require('./playlist-store-save.json').playlistCollection,

  getAllPlaylists() {
    return this.playlistCollection;
  },

  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },

  addPlaylist(playlist) {
    this.playlistCollection.push(playlist);
  },

  removePlaylist(id) {
    _.remove(this.playlistCollection, { id: id });
  },

  removeAllPlaylists() {
    this.playlistCollection = [];
  },

  addSong(id, song) {
    const playlist = this.getPlaylist(id);
    playlist.songs.push(song);
  },

  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    const songs = playlist.songs;
    _.remove(songs, { id: songId });
  },

  getSongs(id) {
    const playlist = this.getPlaylist(id);
    return playist.songs;
  },
};

module.exports = playlistStore;
