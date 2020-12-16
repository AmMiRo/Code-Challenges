// Description

// Given a 32-bit signed integer, reverse digits of an integer.

// Solution

const reverse = function (x) {
  const num = parseInt(x.toString().split("").reverse().join(""));
  const upperLimit = Math.pow(2, 31) - 1;
  if (upperLimit < num) {
    return 0;
  } else if (x < 0) {
    return num * -1;
  } else {
    return num;
  }
};
