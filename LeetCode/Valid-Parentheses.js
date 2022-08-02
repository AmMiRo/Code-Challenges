// Description

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.



// Solution

const isValid = function (s) {
  let stack = [];
  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (
      stack.length > 0 &&
      char === ")" &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    } else if (
      stack.length > 0 &&
      char === "}" &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else if (
      stack.length > 0 &&
      char === "]" &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
