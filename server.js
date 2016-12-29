const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

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

app.get('/', function (request, response) {
  const viewData = {
    title: 'Welcome',
  };
  response.render('index', viewData);
});

app.get('/playlists', function (request, response) {
  const viewData = {
    title: 'Playlists',
    playlist: sample,
  };
  response.render('playlists', viewData);
});

app.get('/about', function (request, response) {
  const viewData = {
    title: 'About Playlist Maker',
  };
  response.render('about', viewData);
});

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
