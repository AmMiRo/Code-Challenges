// Description

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.



// Solution

const addStrings = function (num1, num2) {
  const int = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  let carry = 0;
  let solution = [];

  while (!(i1 < 0 && i2 < 0)) {
    const sum =
      (i1 >= 0 ? int[num1[i1]] : 0) + (i2 >= 0 ? int[num2[i2]] : 0) + carry;

    if (sum >= 10) {
      solution.push(sum - 10);
      carry = 1;
    } else {
      solution.push(sum);
      carry = 0;
    }

    i1--;
    i2--;
  }

  if (carry === 1) {
    solution.push(carry);
  }

  return solution.reverse().join("");
};
