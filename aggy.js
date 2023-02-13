function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sumArray(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function multiplyArray(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  multiplyArray
};
