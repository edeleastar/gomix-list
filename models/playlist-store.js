'use strict';

const _ = require('lodash');
const Store = require('./store');

class PlaylistStore {
  constructor() {
    this.store = new Store('./models/playlist-db.json', { playlistCollection: [] });
  }

  getAllPlaylists() {
    return this.store.findAll('playlistCollection');
  }

  getPlaylist(id) {
    return this.store.findOneBy('playlistCollection', { id: id });
  }

  addPlaylist(playlist) {
    this.store.add('playlistCollection', playlist);
  }

  removePlaylist(id) {
    const playlist = this.getPlaylist(id);
    this.store.remove('playlistCollection', playlist);
  }

  addSong(id, song) {
    const playlist = this.getPlaylist(id);
    playlist.songs.push(song);
  }

  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    const songs = playlist.songs;
    _.remove(songs, function (song) {
      return song.id == songId;
    });
  }

  getSongs(id) {
    const playlist = this.getPlaylist('playlistCollection', id);
    return playist.songs;
  }

  removeAllPlaylists() {
    this.store.removeAll('playlistCollection');
  }
}

module.exports = new PlaylistStore();
