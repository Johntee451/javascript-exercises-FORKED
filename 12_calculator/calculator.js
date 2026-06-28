const add = function(firstNum, secondNum) {
  let addition = firstNum + secondNum;
  return(addition);
};

const subtract = function(firstNum, secondNum) {
	let subtraction = firstNum - secondNum;
  return(subtraction);
};

const sum = function(SumArray) {
	let sumTotal = 0;
  for (const sumArr of SumArray) {
    sumTotal += sumArr;
  }
  return(sumTotal);
};

const multiply = function(mulArray) {
  let mulTotal = 1;
  for (const mulArr of mulArray) {
    mulTotal *= mulArr;
  }
  return(mulTotal);
};

const power = function(number, power) {
	let result = number**power;
  return(result);
};

const factorial = function(number) {
	let prod = 1;
  if (number === 0) {
    return(prod);
  }
  else{
    for (let i = number; i > 0; i--) {
      prod *= i;
    }
    return(prod);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
