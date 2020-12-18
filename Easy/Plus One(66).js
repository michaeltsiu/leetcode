// https://leetcode.com/problems/plus-one/

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.



// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOne = function(digits) {
  // create a popped variable that takes the last digit
  let popped = digits.pop()
  // add to the end popped + 1
  digits.push(popped + 1)
  // create a remainder set to 0
  let remainder = 0
  // iterate over the length by the end
  for (let i = digits.length - 1; i >= 0; i--) {
    // if remainder isn't 0
    if (remainder) {
      // add to digits at the current index the remainder
      digits[i]+= remainder
      // set the remainder to be 0
      remainder = 0
    }
    // create a string var set to the current val of digits
    let stringify = digits[i].toString()
    // check if the string's length is greather than 1
    if (stringify.length > 1) {
      // set the remainder to be the current number
      remainder = Number(stringify[0]);
      // splice digits at the current index, and add stringify's 2nd digit
      digits.splice(i, 1, stringify[1]);
    }
    // if the current index is 0 and remainder isn't 0
    if (i == 0 && remainder !== 0) {
      // add the remainder to digits
      digits.unshift(remainder)
    }
  }
  // return digits
  return digits
};