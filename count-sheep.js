// Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.
//
// Input: 3
// Output:
// 3 - Another sheep jump over the fence
// 2 - Another sheep jump over the fence
// 1 - Another sheep jump over the fence

const countSheep = function(input) {
  if(input === 0) {
     return '';
  }

  return `${input} - Another sheep jump over the fence ${countSheep(input - 1)}`;
}

console.log(countSheep(3));
