// Description

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Solution

// First Pass
function isValidSudoku(board) {
  let solution = true;

  board.forEach((row) => {
    let nums = new Set();

    row.forEach((el) => {
      if (el !== ".") {
        if (nums.has(el)) {
          solution = false;
        } else {
          nums.add(el);
        }
      }
    });
  });
  for (i = 0; i < board.length; i++) {
    let nums = new Set();
    board.forEach((row) => {
      if (row[i] !== ".") {
        if (nums.has(row[i])) {
          solution = false;
        } else {
          nums.add(row[i]);
        }
      }
    });
  }

  const subVerts = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const subHorzs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let nums = new Set();

  subVerts.forEach((cols) => {
    subHorzs.forEach((rows) => {
      cols.forEach((col) => {
        rows.forEach((row) => {
          if (board[col][row] !== ".") {
            if (nums.has(board[col][row])) {
              solution = false;
            } else {
              nums.add(board[col][row]);
            }
          }
        });
      });
      nums = new Set();
    });
  });

  return solution;
}
