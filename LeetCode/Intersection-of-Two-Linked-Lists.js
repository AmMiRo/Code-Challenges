// Description

// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// begin to intersect at node c1.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:

// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Each value on each linked list is in the range [1, 10^9].
// Your code should preferably run in O(n) time and use only O(1) memory.



// Solution

// First Pass (Slow AF)
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  // initialize node and set
  let node = headA;
  const visitedNodes = new Set();

  // add nodes from headA to set
  while (node !== null) {
    visitedNodes.add(node);
    node = node.next;
  }

  node = headB;

  // iterate through headB until node is in set
  while (!visitedNodes.has(node)) {
    if (node.next === null) {
      return null;
    } else {
      node = node.next;
    }
  }

  return node;
};

// Second Pass (slightly faster and O(1) memory)
const getIntersectionNode = function (headA, headB) {
  // ensure both heads are not null
  if (headA === null || headB === null) return null;

  // initialize pointers
  let nodeA = headA;
  let nodeB = headB;

  // iterate through lists
  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;

    // if solution found return solution
    if (nodeA === nodeB) return nodeA;

    // 1st time nodeA reaches end of list, move to headB
    if (nodeA === null) nodeA = headB;

    // 1st time nodeB reaches end of list, move to headA
    if (nodeB === null) nodeB = headA;
  }

  // returns if headA and headB are the same node or if lists do not intersect
  return nodeA;
};

// Third Pass (much faster)
const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }

  return nodeA;
};
