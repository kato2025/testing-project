// Create variable to hold function
const calculator = require('../calculator');
// Test addition
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
// Test subtraction
test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});
// Test multiplication
test('multiplies 4 * 6 to equal 24', () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});
// Test division
test('divides 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
// Test division by zero
test('dividing by zero should return Infinity', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});
// Test modulus
test('modulus 10 % 3 to equal 1', () => {
    expect(calculator.modulo(10, 3)).toBe(1);
  });
// Test modulus by zero
test('modulus 7 % 0 should return NaN', () => {
    expect(calculator.modulo(7, 0)).toBeNaN();
});
