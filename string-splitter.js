// Split a string based
// upon a separator (similar to String.prototype.split).

const strSplit = function(str, predicate, holder='') {
  //base
  if(str.length === 0) {
    return '';
  }

  if(str[0] === predicate) {
    return strSplit(str.slice(1), predicate, holder + str[0]);
  }

  if(str[0] !== predicate) {
    return [str[0], ...strSplit(str.slice(1), predicate, holder)];
  }
}

console.log(strSplit("Infinity", ""))

//String split is only functional with one word strings - not multiple
