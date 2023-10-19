const sum = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = {
  sum,
  substract,
  multiply,
  divide,
  factorial,
};
