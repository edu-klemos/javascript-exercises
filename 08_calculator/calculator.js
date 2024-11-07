const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numbers) {
	return numbers.reduce((total, item) => total + item, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, item) => total * item, 1);

};

const power = function(base, nPower) {
	if (nPower === 0) return 1;
  return base * power(base, nPower - 1);
};

const factorial = function(number) {
	if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
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
