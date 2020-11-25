// https://leetcode.com/problems/majority-element/

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var majorityElement = function(nums) {
  // create a empty object variable to keep track of what appears the most
  let container = {};
  // create a variable to keep track of the majority
  let majority = 0;
  // create a variable to keep track of the max
  let max = 0;
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the container obj contains the current index, set it to one, else increase the key
    container[nums[i]] ? container[nums[i]]++ : container[nums[i]] = 1
    // if the current index of num in container is greater than max
    if (container[nums[i]] > max) {
      // set the max to be the container's value
      max = container[nums[i]];
      // set the majority to be the key
      majority = nums[i];
    }
  }
  // return the majority
  return majority;
};