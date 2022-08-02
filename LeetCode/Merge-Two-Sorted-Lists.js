// Description

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.



// Solution

const mergeTwoLists = function (l1, l2) {
  let result = new ListNode(-1);
  let resultHead = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;
    }
    result = result.next;
  }

  if (l1 !== null) {
    result.next = l1;
  } else {
    result.next = l2;
  }

  return resultHead.next;
};
