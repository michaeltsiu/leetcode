// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// /**
//  * @param {string} s
//  * @return {number}
//  */

const lengthOfLongestSubstring = function(s) {
  let longest = '';
  let current = '';
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let index = current.indexOf(letter);
    if (index > -1) {
      if (current.length > longest.length) longest = current
      current = current.slice(index + 1) + letter
    } else {
      current += letter
    }
  }
  if (longest.length > current.length) {
    return longest.length
  }
  return current.length;
}