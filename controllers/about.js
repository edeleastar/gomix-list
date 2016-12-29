'use strict';

const about = {
  index(request, response) {
    const viewData = {
      title: 'About Playlist Maker',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
