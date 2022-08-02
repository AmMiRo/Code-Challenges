// Description

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false
 

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?



// Solutions

// First Pass (slow)
function isPalindrome(head) {
    let standardValues = "";
    let reversedValues = "";
    
    while (head) {
        standardValues += head.val;
        reversedValues = head.val + reversedValues;
        head = head.next;
    }
    
    return standardValues === reversedValues;
};

// Second Pass (slightly faster)
function isPalindrome(head) {
    let vals = [];
    
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    
    let low = 0
    let high = vals.length - 1
    
    while (low < high) {
        if (vals[low] !== vals[high]) {
            return false
        }
        
        low++
        high--
    }
    
    return true
}

// Third Pass (fastest)
function isPalindrome(head) {
    // return true if empty or only 1 node
    if (!head || !head.next) return true;
    
    // use slow/fast to find center point of LL
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // if fast is not null, the LL has an even
    // number of nodes and slow should be slow.next
    if (fast) slow = slow.next;
    
    // iterate through LL from both heads returning 
    // false if not a palandrome
    let beginning = head;
    let end = reverseHalf(slow);
    
    while (end) {
        if (beginning.val != end.val) return false;
        
        beginning = beginning.next;
        end = end.next;
    }
    
    return true;
    
    // reverse half of LL and return head of reversed half
    function reverseHalf(current) {
        let prev = null;
        
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        return prev;
    }
}