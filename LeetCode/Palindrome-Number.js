// Description

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Solution

const isPalindrome = function (x) {
  const reverse = (x + "").split("").reverse().join("");
  if (x < 0) {
    return false;
  } else if (x == reverse) {
    return true;
  } else {
    return false;
  }
};
