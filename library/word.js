module.exports.extractYear = (item) => {
  try {
    const output = item.match(/\d{4}/)[0];
    return output;
  } catch(error) {
    return null;
  }
};

module.exports.extractMonth = (item) => {
  try {
    const output = item.match(/[a-z]+/i)[0];
    return output.charAt(0).toUpperCase() + output.slice(1);
  } catch(error) {
    return null
  }
};

module.exports.extractDay = (item) => {
  try {
    const output = item.match(/\d{2}/)[0];
    return output;
  } catch(err) {
    return null
  }
};

module.exports.monthToName = (num) => {
  const months = {
    0: "Janurary",
    1: "Feburary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "December"
  };
  return months[num];
};
