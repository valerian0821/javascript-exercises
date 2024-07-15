const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let c = arr.reduce((total, currentNum) => {return total + currentNum;}, 0);
  return c;
};

const multiply = function(arr) {
  let total = arr.reduce((accum, currentNum) => {return accum * currentNum;});
  return total;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(fact) {
  if (fact === 0) {
    return 1;
  }
  let factArr = [];
  for (let i = fact; i > 0; i--) {
    factArr.push(i);
  }
  return multiply(factArr);
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
