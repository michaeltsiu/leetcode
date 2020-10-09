// /**
//  * @param {string} s
//  * @return {number}
//  */
var firstUniqChar = function(s) {
  // create a container to hold the characters
  let container = {};
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
      // if container contains string at index, increment
      if (container[s[i]]) {
          container[s[i]]++;
          // else add to container
      } else {
          container[s[i]] = 1
      }
  }
  // iterate over the container, if container value is 1, return string at index of that key
  for (let i in container) {
      if (container[i] == 1) {
          return s.indexOf(i)
      }
  }
  // return -1 if no conditions are met
  return -1
};