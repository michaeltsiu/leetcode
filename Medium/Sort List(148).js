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
  // if the head or the next head is null
  if (head === null || head.next === null) {
    // return the head
    return head;
  }
  // create a temp, slow and fast variable to all be equal to head
  let temp = head, slow = head, fast = head;
  // split the linkedlist in half by checking if fast and fast.next is not null
  if (fast !== null && fast.next !== null) {
    // set temp to be slow
    temp = slow;
    // set slow to be next of slow
    slow = slow.next;
    // set fast to be 2x next of fast
    fast = fast.next.next;
  }
  // set the next temp to be null
  temp.next = null;
  // create leftside for recursion with sortList taking head
  let leftSide = sortList(head);
  // create rightside for recursion with sortList taking slow
  let rightSide = sortList(slow);
  // return our mergesort function with leftside and right side
  return mergeSort(leftSide, rightSide);
}

// create a helper function for merge sort with left and right parameters
let mergeSort = (left, right) => {
  // create a temp variable to be our new node
  let temp = new ListNode(0);
  // create a current variable to be equal to temp
  let curr = temp;
  // while left and right are not null
  while (left !== null && right !== null) {
    // if left's val is less than right's val
    if (left.val < right.val) {
      // set current's next to be left
      curr.next = left;
      // set left to be the next left
      left = left.next;
    }
    // else
    else {
      // set current's next to be right
      curr.next = right;
      // set right to be the next right
      right = right.next;
    }
    // set current to be current's next
    curr = curr.next;
  }
  // check if left isn't null
  if (left !== null) {
    // set current's next to be left
    curr.next = left;
    // set left to be the next left
    left = left.next;
  }
  // check if right isn't null
  if (right !== null) {
    // set current's next to be right
    curr.next = right;
    // set right to be the next right
    right = right.next;
  }
  // return the temp's next
  return temp.next;
}