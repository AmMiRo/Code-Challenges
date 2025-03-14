// Description

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

// Solution

// First Pass
var arrangeCoins = function (n) {
  if (n <= 0) return 0;

  let row = 1;

  while (n >= 0) {
    if (n - row > row) {
      n = n - row;
      row++;
    } else {
      n = n - row;
    }
  }

  return row;
};

// Second Pass
var arrangeCoins = function (n) {
  let row = 0;

  for (let i = 1; i <= n; i++) {
    n -= i;
    row++;
  }

  return row;
};
