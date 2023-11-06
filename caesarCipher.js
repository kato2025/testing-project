// Create function to shift a character
function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    return char;
  }
// Create function to cut and join a string 
function caesarCipher(str, shift) {
    return str
      .split('')
      .map(char => shiftChar(char, shift))
      .join('');
  }
// Export functions
module.exports = { caesarCipher, shiftChar };