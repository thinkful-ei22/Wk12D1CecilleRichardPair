// Calculates the nth triangular number. A triangular number counts 
// the objects that can form an equilateral triangle. The nth triangular 
// number is the number of dots composing a triangle with n dots on a side, 
// and is equal to the sum of the n natural numbers from 1 to n. This is the 
// Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

const triNum = function(num) {
  //base case 
  if (num === 0) {
    return 0;
  }

  //general case
  return num + triNum(num - 1);
};

console.log(triNum(8));