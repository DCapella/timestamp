const word = require('./word');

module.exports.dateObject = (date) => {
  if (!isNaN((new Date(date*1000)).getTime())) {
    const naturalDate = new Date(date*1000);
    const formatDate = word.monthToName(naturalDate.getMonth()) + " " +
      naturalDate.getDate() + ", " +
      naturalDate.getFullYear();
    return { "unix": naturalDate.getTime(), "natural": formatDate };
  } else {
    const naturalDate = new Date(
      word.extractMonth(date) + " " +
      word.extractDay(date) + ", " +
      word.extractYear(date)
    );
    const unixDate = naturalDate.getTime();

    if (isNaN(unixDate)) {
      return { "unix": null, "natural": null };
    } else {
      const month = word.monthToName(naturalDate.getMonth());
      const day = naturalDate.getDate();
      const year = naturalDate.getFullYear();
      const formatDate = month + " " + day + ", " + year;

      return { "unix": unixDate, "natural": formatDate};
    }
  }
};
