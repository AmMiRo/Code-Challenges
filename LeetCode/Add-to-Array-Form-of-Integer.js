// Description

// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

// Example 1:

// Input: A = [1,2,0,0], K = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: A = [2,7,4], K = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: A = [2,1,5], K = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
// Example 4:

// Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000

// Solution



// First Pass
const addToArrayForm = function (A, K) {
  // stringify K
  K = K.toString();

  // initialize variables
  let result = [];
  let pointerA = A.length - 1;
  let pointerK = K.length - 1;
  let carry = 0;

  // loop through A and K backwards adding the numbers
  while (pointerA >= 0 || pointerK >= 0) {
    let valA = pointerA >= 0 ? A[pointerA] : 0;
    let valK = pointerK >= 0 ? Number(K[pointerK]) : 0;
    let value = valA + valK + carry;
    if (value >= 10) {
      value -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result.unshift(value);
    pointerA--;
    pointerK--;
  }

  if (carry > 0) result.unshift(carry);

  // return result
  return result;
};

// Improved
const addToArrayForm = function (A, K) {
  // initialize variables (i, carry)
  let i = A.length - 1;
  let carry = 0;

  // loop until no K or carry modifying value of A[i] or unshifting new value
  while (K || carry) {
    const valK = K % 10;

    if (i >= 0) {
      let value = A[i] + valK + carry;
      carry = value >= 10 ? 1 : 0;
      A[i] = value % 10;
      i--;
    } else {
      value = valK + carry;
      carry = value >= 10 ? 1 : 0;
      A.unshift(value % 10);
    }

    K = Math.floor(K / 10);
  }

  // return A
  return A;
};
