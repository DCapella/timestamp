module.exports.extractYear = (item) => {
  let output;
  try {
    output = item.match(/\d{4}/)[0];
  } catch(error) {
    return null;
  }
  return output;
};

module.exports.extractMonth = (item) => {
  let output;
  try {
    output = item.match(/[a-z]+/i)[0];
    output = output.charAt(0).toUpperCase() + output.slice(1);
  } catch(error) {
    return null
  }
  return output;
};

module.exports.extractDay = (item) => {
  const itemArr = item.split('');
  let output;

  if (itemArr.includes(',')) {
    try {
      output = item.match(/[a-z]*(\d+)[,0-9]+/)[1];
    } catch(err) {
      return null;
    }
  } else {
    try {
      output = item.match(/(\d+)[a-z]+[0-9]+/i)[1];
    } catch(err) {
      return null;
    }
  }
  return output;
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
    10: "December",
    11: "Janurary"
  };
  return months[num];
};
