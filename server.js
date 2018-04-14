const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'pug');
app.use(express.static('public'));

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log({ "Live": port });
});
