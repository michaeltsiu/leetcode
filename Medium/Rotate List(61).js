// https://leetcode.com/problems/rotate-list/

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */

var rotateRight = function(head, k) {
  if (!head) return head;
  let length = lengthOfList(head);
  for (let i = 0; i < (k%length); i++) {
    let newNode = new ListNode(), node = head, prev = head;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    if (length > 0) {
        prev.next = null;
        newNode.val = node.val;
        newNode.next = head;
        head = newNode;
    }
  }
  return head;
}

let lengthOfList = head => {
  let node = head, length = 0;
  while (node) {
      node = node.next;
      length++;
  }
  return length;
}