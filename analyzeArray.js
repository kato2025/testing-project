// Create a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length. 
function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        average: 0,
        min: undefined,
        max: undefined,
        length: 0,
      };
    }
  // Create variables to hold average, min, max, and length
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  // Return object with average, min, max, and length
    return {
      average,
      min,
      max,
      length: arr.length,
    };
  }
// Export function
module.exports = analyzeArray;
  