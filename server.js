const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.get('/', function (request, response) {
  const viewData = {
    title: 'Playlist Maker',
  };
  response.render('index', viewData);
});

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
