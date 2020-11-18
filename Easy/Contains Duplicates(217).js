// https://leetcode.com/problems/contains-duplicate/

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */

var containsDuplicate = function(nums) {
  // Create a variable to keep track of all the numbers
  let container = {};
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the container contains the current nums value
    if (container[nums[i]]) {
      // return true because it the array contains a duplicate
      return true;
    } else {
      // add the current value to the object key
      container[nums[i]] = 1
    }
  }
  // return false, no duplicates
  return false;
}