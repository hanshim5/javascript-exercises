const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
  let total = 0
	for (i = 0; i < array.length; i++) {
    total += array[i] }
  return total
};

const multiply = function(array) {
  return array.reduce((acc, num) => acc * num)
};

const power = function(base, exponent) {
  return Math.pow(base, exponent)
};

const factorial = function(num) {
  let factorial = 1

  for (i=num; i>0; i--) {
    factorial *= i
  }
	return factorial
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
