// https://leetcode.com/problems/sort-list/

// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?



// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []


// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var sortList = function(head) {
  if (head === null || head.next === null) return head;
  let temp = head, slow = head, fast = head;
  if (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  temp.next = null;
  let leftSide = sortList(head);
  let rightSide = sortList(slow);
  return merge(leftSide, rightSide);
}

let merge = (left, right) => {
  let temp = new ListNode(0);
  let current = temp;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  if (left !== null) {
    current.next = left;
    left = left.next;
  }
  if (right !== null) {
    current.next = right;
    right = right.next;
  }
  return temp.next;
}
