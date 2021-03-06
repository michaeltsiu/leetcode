// https://leetcode.com/problems/minimum-absolute-difference/

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]


// Constraints:

// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6

// /**
//  * @param {number[]} arr
//  * @return {number[][]}
//  */
var minimumAbsDifference = function(arr) {
  // create a variable to hold the result
  const result = [];
  // sort the array by lowest to highest
  arr.sort((a, b) => a - b);
  // placeholder for minimum difference
  let minDiff = Infinity;
  // iterate over the array
  for (let i = 1; i < arr.length; i++) {
    // set the minimum difference to whichever is lower, current minimum difference or current index - previous index
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  // iterate over the array again
  for (let i = 1; i < arr.length; i++) {
    // if the current index of the array and previous is equal to the minimum difference
    if (arr[i] - arr[i-1] === minDiff) {
      // push the pair to the result
      result.push([arr[i - 1], arr[i]]);
    }
  }
  // return the result
  return result;
};