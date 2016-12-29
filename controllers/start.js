'use strict';

const start = {
  index(request, response) {
    const viewData = {
      title: 'Welcome',
    };
    response.render('index', viewData);
  },
};

module.exports = start;
