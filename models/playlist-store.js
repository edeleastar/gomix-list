const Store = require('./store');

class PlaylistStore {
  constructor() {
    this.store = new Store('./models/playlist-db.json', 'playlistCollection', { playlistCollection: [] });
  }

  getAllPlaylists() {
    return this.store.findAll();
  }

  getPlaylist(id) {
    return this.store.findOneBy({ id: id });
  }

  addPlaylist(playlist) {
    this.store.add(playlist);
  }

  removePlaylist(id) {
    const playlist = this.getPlaylist(id);
    this.store.remove(playlist);
  }

  addSong(id, song) {
    const playlist = this.getPlaylist(id);
    playlist.songs.push(post);
  }

  removeSong(id, song) {
    const playlist = this.getPlaylist(id);
    playlist.songs.push(post);
  }

  getSongs(id) {
    const playlist = this.getPlaylist(id);
    return playist.songs;
  }

  drop() {
    this.store.drop();
  }
}

module.exports = new PlaylistStore();
