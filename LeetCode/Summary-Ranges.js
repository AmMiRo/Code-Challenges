// Description

// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.



// Solution

const summaryRanges = function (nums) {
  const solution = [];
  let i = 0;

  for (j = 0; j < nums.length; j++) {
    if (nums[j + 1] === nums[j] + 1) continue;
    else {
      if (i == j) solution.push(nums[i].toString());
      else solution.push(nums[i] + "->" + nums[j]);
      i = j + 1;
    }
  }

  return solution;
};
