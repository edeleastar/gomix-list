'use strict';

const playlistCollection = require('../models/playlist-db.json').playlistCollection;

const playlist = {
  show(request, response) {
    const id = parseInt(request.params.id);
    const viewData = {
      title: 'Playlist',
      playlist: playlistCollection[id],
    };
    response.render('playlist', viewData);
  },

  addSong(request, response) {
    const id = parseInt(request.params.id);
    const song = request.body;
    const list = playlistCollection[id];
    list.songs.push(song);
    response.redirect('/playlist/' + id);
  },
};

module.exports = playlist;
