// Write a recursive function that prints the fibonacci sequence of a given
// number. The fibonnaci sequence a series of numbers in which each number
// is the sum of the two preceding numbers. For example the 7th fibonacci
// number in a fibonaci sequence is 13. The sequence looks as follows:
// 1 1 2 3 5 8 13.

const fib = function(num, holder=[1, 1]) {
  //base
  if(num === 1) {
    return [1];
  }

  //general
  // console.log(holder)
  const combo = holder[holder.length-1] + holder[holder.length-2];
  return [combo, ...fib(num - 1, [...holder, combo])];
};

// console.log(fib(7));

const fib2 = function(num) {
  if(num <= 2) {
    return 1;
  }

  return fib2(num - 1) + fib2(num - 2);
};

console.log(fib2(4));
