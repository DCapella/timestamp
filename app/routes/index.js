const dateRoutes = require('./date_routes');
const word = require('../../library/word');

module.exports = function(app, db) {
  app.get('/:date', (req, res) => {
    const date = req.params.date;
    const naturalDate = new Date(
      word.extractMonth(date) + " " +
      word.extractDay(date) + ", " +
      word.extractYear(date)
    );
    const unixDate = naturalDate.getTime();

    if (isNaN(unixDate)) {
      res.send({ "unix": null, "natural": null });
    } else if () {
      // START HERE
    } else {
      const month = word.monthToName(naturalDate.getMonth());
      const day = naturalDate.getDate();
      const year = naturalDate.getFullYear();
      const formatDate = month + " " + day + ", " + year;

      res.send({ "unix": unixDate, "natural": formatDate});
    }
  });
};
