// Create variable to hold function
const capitalize = require('../capitalize');
// Test capitalize first character
test('capitalize function capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
test('capitalize function capitalizes the first character of an empty string', () => {
  expect(capitalize('')).toBe('');
});
test('capitalize function throws an error if input is not a string', () => {
  expect(() => {
    capitalize(42);
  }).toThrow('Input must be a string');
});