// Create variable to hold function
const reverseString = require('../reverseString');
// Test reverseString function
test('reverseString function reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
test('reverseString function reverses an empty string', () => {
  expect(reverseString('')).toBe('');
});
test('reverseString function reverses a string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
test('reverseString function reverses a string with special characters', () => {
  expect(reverseString('@#$%^&*')).toBe('*&^%$#@');
});
