const express = require('express');

const app = express();

const port = 'https://git.heroku.com/infinite-dusk-10370.git';

app.set('view engine', 'pug');
app.use(express.static('public'));

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log({ "Live": port });
});
