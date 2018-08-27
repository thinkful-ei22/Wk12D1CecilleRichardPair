const factorial = function(num) {
  // base case
  if (num === 1) {
    return num;
  }

  // general case 

  return num * factorial(num - 1);
};

console.log(factorial(5));