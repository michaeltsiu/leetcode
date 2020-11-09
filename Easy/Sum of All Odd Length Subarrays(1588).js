// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.



// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66


// Constraints:

// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var sumOddLengthSubarrays = function(arr) {
  // create a variable to hold the sum;
  let sum = 0;
  // iterate over the array for a starting number
  for (let i = 0; i < arr.length; i++) {
      // iterate over the array for the end of the number
      for (let j = i; j < arr.length; j++) {
          // check if the start - end is an odd number
          if ((i - j) % 2 == 0) {
              // iterate over until the end of the number
              for (let k = i; k <= j; k++) {
                  // add the value of the current index at the array to the sum
                  sum += arr[k]
              }
          }
      }
  }
  // return the total sum;
  return sum;
};

