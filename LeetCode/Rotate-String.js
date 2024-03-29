// Description

// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false



// Solution

// First Pass
const rotateString = function (A, B) {
  if (A === B) {
    return true;
  }

  for (i = 0; i < A.length; i++) {
    A = A.slice(1) + A.slice(0, 1);
    if (A === B) {
      return true;
    }
  }

  return false;
};

// Definitely Faster
const rotateString = (A, B) => {
  return A.length === B.length && (A + A).includes(B);
};
