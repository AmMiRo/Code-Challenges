// Description

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]



// Solution

// First Pass
const generate = function (numRows) {
  // resolve edge cases
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  }

  // initialize variables
  let result = [[1], [1, 1]];

  // loop creating next level with each loop
  for (i = 1; i < numRows - 1; i++) {
    let currentRow = [];
    // loop through prev level to populate new level
    for (j = 0; j < result[i].length - 1; j++) {
      currentRow.push(result[i][j] + result[i][j + 1]);
    }

    result.push([1, ...currentRow, 1]);
  }

  // return result
  return result;
};

// Second Pass !!!Worse!!!

const generate = function (numRows) {
  // resolve edge cases
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  }

  // initialize variables
  let result = [[1], [1, 1]];

  // loop creating next level with each loop
  for (i = 2; i < numRows; i++) {
    result[i] = [1];
    // loop through prev level to populate new level
    for (j = 0; j < result[i - 1].length - 1; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j + 1]);
    }

    result[i].push(1);
  }

  // return result
  return result;
};
