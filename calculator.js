// Create a calculator object which has the following methods: add, subtract, multiply, divide, and modulo. 
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? Infinity : a / b),
    modulo: (a, b) => (b === 0 ? NaN : a % b),
  };
// Export calculator object  
module.exports = calculator;