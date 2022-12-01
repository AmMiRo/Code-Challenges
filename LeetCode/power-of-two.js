// Description

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:

// Input: n = 3
// Output: false



// Solution

// First Pass (slowest)
function isPowerOfTwo(n) {
    while (n > 1) {
        n /= 2;
    }

    if (n === 1) return true;

    return false;
};

// Second Pass (fastest)
function isPowerOfTwo(n) {
    let multiple = 1;
    while (multiple < n) {
        multiple *= 2;
    }

    if (multiple === n) return true;

    return false;
};

// Third Pass
function isPowerOfTwo(n) {
    return ~~Math.log2(n) === Math.log2(n);
};