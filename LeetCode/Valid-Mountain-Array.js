// Description

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false

// Solution

const validMountainArray = function (arr) {
  // initialize variables (peak, descending, result)
  let last = -1;
  let increase = false;
  let decreasing = false;

  if (arr[0] < arr[1]) increase = true;

  // loop through arr
  for (const val of arr) {
    if (!decreasing) {
      if (val > last) {
        last = val;
      } else if (val === last) {
        return false;
      } else if (val < last) {
        last = val;
        decreasing = true;
      }
    } else if (decreasing) {
      if (val < last) {
        last = val;
      } else if (val >= last) {
        return false;
      }
    }
  }

  return increase === true && decreasing === true;
};
