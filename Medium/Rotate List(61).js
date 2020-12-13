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
  // if the head is not present, return the head
  if (!head) return head;
  // helper function to find the length of the list
  let length = lengthOfList(head);
  // iterate over k modulo length so it doesn't run more than it needs to
  for (let i = 0; i < (k%length); i++) {
    // create variables newNode to hold a node, set node and prev to be head;
    let newNode = new ListNode(), node = head, prev = head;
    // while there is a next node
    while (node.next) {
      // set prev to be node
      prev = node;
      // set node to be the next
      node = node.next;
    }
    // if the length is greater than 0
    if (length > 0) {
      // set the prev's next to be null, cutting the tail off
      prev.next = null;
      // set the newNode's value to be the node's val
      newNode.val = node.val;
      // set the newnode's next to be head
      newNode.next = head;
      // set the head to be newnode
      head = newNode;
    }
  }
  // return head
  return head;
}
// helper function to find the length of list
let lengthOfList = head => {
  // set node to be head and length to be 0
  let node = head, length = 0;
  // while node is there
  while (node) {
    // set node to be the next node
    node = node.next;
    // increment length
    length++;
  }
  // return length
  return length;
}