// https://leetcode.com/problems/product-of-array-except-self/

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var productExceptSelf = function(nums) {
  // create empty array to hold all products;
  let allProducts = [];
  // create variable to hold the product
  let currentProduct = 1;
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // add values to
    allProducts[i] = currentProduct;
    currentProduct *= nums[i];
  }
  currentProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    allProducts[i] *= currentProduct;
    currentProduct *= nums[i];
  }
  // return all products;
  return allProducts;
};

// Second variation answer
var productExceptSelf = function(nums) {
  let N = nums.length;
  let left_products = new Array(N);
  let right_products = new Array(N);
  let output_arr = new Array(N);

  left_products[0] = 1;
  right_products[N-1] = 1;

  for (let i = 1; i < N; i++) {
    left_products[i] = nums[i-1] * left_products[i-1];
  }
  for (let i = N-2; i >= 0; i--) {
    right_products[i] = nums[i+1] * right_products[i+1];
  }
  for (let i = 0; i < N; i++) {
    output_arr[i] = left_products[i] * right_products[i];
  }
  return output_arr;
}