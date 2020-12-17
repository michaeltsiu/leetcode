// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

var mergeTwoLists = function(l1, l2) {
  // create a new node to start the list
  let list = new ListNode();
  // set the head to be the list
  let head = list;
  // while there are nodes in both left and right
  while (l1 && l2) {
    // if the val of the first list is less than the second
    if (l1.val < l2.val) {
      // set the list's next node to be the val of list one
      list.next = new ListNode(l1.val);
      // set lists curr node of list 1 to be the next
      l1 = l1.next;
      // else
    } else {
      // set the list's next node to be the val of list two
      list.next = new ListNode(l2.val);
      // set lists curr node of list 2 to be the next
      l2 = l2.next;
    }
    // set the current node of list to be the next
    list = list.next;
  }
  // if theres a node in first list, set the next list's node to be the first list
  if (l1) list.next = l1;
  // if theres a node in the second list, set the next list's node to be the second list
  if (l2) list.next = l2;
  // return the head's next
  return head.next;
};