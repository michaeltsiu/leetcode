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
  // create container set to empty obj, majority set to 0, occurance set to 0
  let container = {}, majority = 0, occurance = 0;
  // iterate over nums arr
  for (let num of nums) {
      // if container at curr val is valid, increment it, else set to 1
      container[num] ? container[num]++ : container[num] = 1
      // if container at curr val is greater than occurance
      if (container[num] > occurance) {
          // set occurance to be container at curr val
          occurance = container[num];
          // set majority to be curr val
          majority = num;
      }
  }
  // return majority
  return majority;
};