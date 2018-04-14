const word = require('../library/word');
const findTime = require('../library/find-time');

module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.render('index', {});
  });

  app.get('/:date', (req, res) => {
    const date = req.params.date.replace(/\s/g, '');
    res.send(findTime.dateObject(date));
  });
};
