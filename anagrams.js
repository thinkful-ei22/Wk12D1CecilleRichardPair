// An anagram is any word or phrase that exactly reproduces the letters in another order. 
// Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. 
// For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
// For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. 
// This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.

const anagram = function(str) {

  //base case
  if (str.length <= 1) {
    return str;
  }

  let array = [];
  //general case
  for(let i = 0; i < str.length; i++) {
    array.push(str[i] + anagram(str.slice(0,i) + str.slice(i+1)));
  }

  return array;
};

console.log(anagram('tea'));


