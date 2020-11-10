// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
  // create an object variable to hold all values
  let map = new Map();
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
      // create a variable to check complementary values to the target
      let complement = target - nums[i]
      // if complementary value is within the object variable
      if (complement in map) {
          // return the object variable's key and the current index
          return [map[complement], i]
      }
      // add the current arrays value into the map
      map[nums[i]] = i
  }
};