// Description

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]



// Solution

// First Pass
function removeNthFromEnd(head, n) {
    if (head.next === null) return null;
    
    let count = 1;
    
    let current = head;
    
    while (current.next !== null) {
        count++;
        current = current.next;
    }
    console.log(count)
    
    const nodeToRemove = count - (n - 1);
    
    if (nodeToRemove === 1) return head.next;
    
    count = 1
    
    current = head;
    
    let prev = head;
    
    while (count < nodeToRemove) {
        console.log(current.next)
        prev = current;
        current = current.next;
        count++;
    }
    
    prev.next = current.next;
    
    return head;
};

// Second Pass
function removeNthFromEnd(head, n) {
    if (!head.next) return null;
    
    let count = 1;
    let prev = head;
    let toDelete = head;
    let front = head;
    
    while (front.next) {
        if (count >= n) {
            prev = toDelete;
            toDelete = toDelete.next;
        }
        front = front.next;
        count++
    }
    
    if (prev.next === toDelete.next) return head.next;
    
    prev.next = toDelete.next;
    
    return head;
};
