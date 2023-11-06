//Create variable to hold function
const { caesarCipher } = require('../caesarCipher');
// Create tests
test('shifts characters in the string based on the shift factor', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 5)).toBe('cde');
});

test('wraps from Z to A', () => {
  expect(caesarCipher('XYZ', 5)).toBe('CDE');
});

test('keeps the same case', () => {
  expect(caesarCipher('CaSe TeSt', 1)).toBe('DbTf UfTu');
});

test('handles punctuation', () => {
  expect(caesarCipher('Hello, World!', 7)).toBe('Olssv, Dvysk!');
});
