// Create variable to hold function
const analyzeArray = require('../analyzeArray');
// Create tests
test('analyzes an array of numbers and returns correct properties', () => {
  const result = analyzeArray([1, 5, 3, 8, 9]);
  expect(result).toEqual({
    average: 5.2,
    min: 1,
    max: 9,
    length: 5,
  });
});
test('handles an empty array and returns default values', () => {
  const result = analyzeArray([]);
  expect(result).toEqual({
    average: 0,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
