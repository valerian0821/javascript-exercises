const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5 / 9);
  cTemp = Number(cTemp.toFixed(1));
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * (9 / 5) + 32;
  fTemp = Number(fTemp.toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
