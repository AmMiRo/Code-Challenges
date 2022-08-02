// Description

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.



// Solution

// doesn't work with big numbers
const addBinary = function (a, b) {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
};

// final solution
const addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  while (a || b || carry) {
    let sum = +a.slice(-1) + +b.slice(-1) + carry;
    console.log(a, b);

    if (sum > 1) {
      result = (sum % 2) + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
};
