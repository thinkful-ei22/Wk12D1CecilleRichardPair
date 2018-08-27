// Write a function that reverses a string. Take a string as input,
// reverse the string, and return the new string.

const revStr = function(str) {
  //base case
    if(str.length === 0) {
      return ""
    }

  //general case
    return str.slice(-1) + revStr(str.slice(0, -1));
}

console.log(revStr("cat"));
