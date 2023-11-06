// Create a capitalize function to capitalize the first letter of a string.
function capitalize(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
// Export capitalize function  
module.exports = capitalize;
  