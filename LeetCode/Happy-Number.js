// Description

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Solution

// First Pass
const isHappy = function (n) {
  // declare variables and end conditions
  const visitedNumbers = new Set();
  let numberIsHappy = false;
  let numberIsUnhappy = false;
  // loop until result
  while (!numberIsHappy && !numberIsUnhappy) {
    // loop through and add digits of n
    let newNum = 0;
    for (const num of n.toString()) {
      newNum += Number(num) * Number(num);
    }
    if (visitedNumbers.has(newNum)) {
      numberIsUnhappy = true;
    } else if (newNum === 1) {
      numberIsHappy = true;
    } else {
      visitedNumbers.add(newNum);
      n = newNum;
    }
  }
  // return result
  return numberIsHappy;
};

// Recursive

const isHappy = function (n) {
  // create new set
  const newSet = new Set();
  // return recursiveHappyFinder for n
  return recursiveHappyHelper(n, newSet);
};

const recursiveHappyHelper = (n, visitedNums) => {
  let newNum = 0;
  for (const num of n.toString()) {
    newNum += Number(num) * Number(num);
  }
  if (n === 1) {
    return true;
  } else if (visitedNums.has(n)) {
    return false;
  } else {
    visitedNums.add(n);
    return recursiveHappyHelper(newNum, visitedNums);
  }
};
