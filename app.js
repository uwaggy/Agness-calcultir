 app.js
const express = require('express');
const app = express();

const add = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = (numbers) => {
  let product = 1;
  for (const number of numbers) {
    product *= number;
  }
  return product;
};

app.get('/add', (req, res) => {
  const numbers = req.query.numbers;
  const sum = add(numbers);
  res.send({ sum });
});

app.get('/multiply', (req, res) => {
  const numbers = req.query.numbers;
  const product = multiply(numbers);
  res.send({ product });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});