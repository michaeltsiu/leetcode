var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode();
  let currentNode = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }

  while (l1) {
    currentNode.next = l1;
    l1 = l1.next;
    currentNode = currentNode.next;
  }

  while (l2) {
    currentNode.next = l2;
    l2 = l2.next;
    currentNode =  currentNode.next;
  }
  return dummyHead.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))