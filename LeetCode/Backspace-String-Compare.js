// Description

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Solution

const backspaceCompare = function (S, T) {
  // initialize variables
  const strings = [S, T];
  const solutions = ["", ""];

  // loop over S and T
  for (i = 0; i < strings.length; i++) {
    for (const char of strings[i]) {
      // add char or backspace
      if (char !== "#") {
        solutions[i] += char;
      } else {
        solutions[i] = solutions[i].slice(0, solutions[i].length - 1);
      }
    }
  }

  // return solution
  return solutions[0] === solutions[1];
};
