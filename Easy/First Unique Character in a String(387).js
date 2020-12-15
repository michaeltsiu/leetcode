// /**
//  * @param {string} s
//  * @return {number}
//  */
var firstUniqChar = function(s) {
  // create a letter obj to hold characters
  let letters = {};
  // iterate over s
  for (let char of s) {
      // set letter at curr val to be letter at curr val or 0 + 1
      letters[char] = (letters[char] || 0) + 1;
  }
  // iterate over letter obj
  for (let char in letters) {
      // if the val is 1, return s at index of the char
      if (letters[char] === 1) return s.indexOf(char);
  }
  // return -1 if not found
  return -1;
};