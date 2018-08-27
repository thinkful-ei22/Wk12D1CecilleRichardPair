// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. 
// Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]

const arrayDouble = function(array) {
  // base case 
  if (array.length === 0) {
    return [];
  }

  // general case
  return [array[0]*2, ...arrayDouble(array.slice(1))];
};

console.log(arrayDouble([1, 2, 3]));