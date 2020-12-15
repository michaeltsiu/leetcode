// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5


// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
var minDepth = function(root) {
  // if the root is null, return 0
  if (root === null) return 0;
  // using recursion, create a variable with left and right that takes either root left or root right
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  // if the tree is skewed, checking if left is 0 or right is 0 (not both)
  if (left === 0 || right === 0) {
    // return the higher of left or right + 1
    return Math.max(left, right) + 1;
  }
  // return the minimum between left and right + 1
  return Math.min(left, right) + 1
};