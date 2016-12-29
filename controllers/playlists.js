'use strict';

const sample = [
  {
    title: 'Opus 9',
    artist: 'Beethoven',
  }, {
    title: 'Opus 23',
    artist: 'Beethoven',
  }, {
    title: 'Opus 33',
    artist: 'Beethoven',
  },
];

const playLists = {
  index(request, response) {
    const viewData = {
      title: 'Playlists',
      playlist: sample,
    };
    response.render('playlists', viewData);
  },
};

module.exports = playLists;
