// Description

// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]



// Solution

const getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  let prevRow = [1, 1];

  for (i = 2; i <= rowIndex; i++) {
    let currRow = [1];

    for (j = 0; j < prevRow.length - 1; j++) {
      currRow.push(prevRow[j] + prevRow[j + 1]);
    }

    currRow.push(1);
    prevRow = currRow;
  }

  return prevRow;
};
