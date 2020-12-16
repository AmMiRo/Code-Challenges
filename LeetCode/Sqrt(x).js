// Description

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Solution

// works, but misses the point
const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

// binary search solution
const mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid;
    }
  }

  return left - 1;
};
