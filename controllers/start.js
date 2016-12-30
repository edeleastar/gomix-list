'use strict';

const start = {
  index(request, response) {
    const viewData = {
      title: 'Welcome',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
