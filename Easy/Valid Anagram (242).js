// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const letters = {}
  for (let l of s) {
      letters[l] = (letters[l] || 0) + 1;
  }
  for (let l of t) {
      if (!letters[l]) {
          return false;
      }
      letters[l]--
  }
  return true;
};

// var isAnagram = function(s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// };
