// Description

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.



// Solution

const moveZeroes = function (nums) {
  let i = 0;

  for (j = 0; j < nums.length; j++)
    if (nums[j] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
};
