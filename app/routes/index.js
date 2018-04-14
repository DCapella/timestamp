const dateRoutes = require('./date_routes');

module.exports = function(app, db) {
  dateRoutes(app, db);
};
