// Description

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Solution

const deleteDuplicates = function (head) {
  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
};
