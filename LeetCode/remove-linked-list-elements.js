// Description

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:

// Input: head = [], val = 1
// Output: []

// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []



// Solution

// First Pass
function removeElements(head, val) {
    if (!head) return head;
    while (head && head.val === val) {
            head = head.next;
    };

    let cur =  head;

    while (cur && cur.next) {
        while (cur.next && cur.next.val === val) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    };

    return head;
};