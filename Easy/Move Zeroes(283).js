// https://leetcode.com/problems/move-zeroes/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var moveZeroes = function(nums) {
  // create variable to contain how many 0's are in the nums array
  let zeroes = 0;
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the current value is a 0
      if (nums[i] == 0) {
        // remove the 0
        nums.splice(i, 1);
        // decrement the index
        i--;
        // increase zeroes
        zeroes++;
      }
  }
  // while there zero isnt 0
  while (zeroes) {
    // push a 0 into the nums array
    nums.push(0)
    // decremeny zero
    zeroes--;
  }
  // return the nums array
  return nums
};