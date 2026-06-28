let thirtyTwo = (32);
let fiveOverNine = (5/9);
let  nineOverFive = (9/5);

const convertToCelsius = function(tempInFahrenheit) {
  let difference = (tempInFahrenheit - thirtyTwo);
  let celsius = (difference * fiveOverNine);
  let stringFinal = celsius.toFixed(1);
  let numberFinal = Number(stringFinal);
  let realFinal = numberFinal.toPrecision();
  let numberRealFinal = Number(realFinal)
  return (numberRealFinal);
};

const convertToFahrenheit = function(tempInCelsius) {
  let product = (tempInCelsius * nineOverFive);
  let fahrenheit = (product + thirtyTwo);
  let stringFinal = fahrenheit.toFixed(1);
  let numberFinal = Number(stringFinal);
  let realFinal = numberFinal.toPrecision();
  let numberRealFinal = Number(realFinal)
  return (numberRealFinal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
