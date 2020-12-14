// https://leetcode.com/problems/jump-game-ii/

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.



// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2


// Constraints:

// 1 <= nums.length <= 3 * 104
// 0 <= nums[i] <= 105

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var jump = function(nums) {
  // if nums length is less than or equal to 1 return 0;
  if (nums.length <= 1) return 0;
  // create 3 helping variables, 1. pointer set to 0, 2. reach set to pointer + nums at reach, 3. jumps set to 1;
  let pointer = 0, reach = pointer + nums[pointer], jumps = 1;
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the reach is less than the index
    if (reach < i) {
      // iterate over i with j starting at the pointer
      for (let j = pointer; j < i; j++) {
        // create a new helping var named newreach set to j + nums at j
        let newReach = j + nums[j];
        // if newreach is greater than reach
        if (newReach > reach) {
          // set reach to be newreach
          reach = newReach;
          // set pointer to be j
          pointer = j;
        }
      }
      // increase jumps
      jumps++;
    }
  }
  // return jumps
  return jumps;
};