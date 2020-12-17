// Description

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Solution

var sortedSquares = function (nums) {
  for (i = 0; i < nums.length; i++) {
    // When tested n * n is faster than Math.pow(n, 2);
    // nums[i] = Math.pow(nums[i], 2);
    nums[i] = nums[i] * nums[i];
  }

  return nums.sort(function (a, b) {
    return a - b;
  });
};
