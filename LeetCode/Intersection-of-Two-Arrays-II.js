// Description

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Solution

const intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  const result = [];

  for (const num of nums1) {
    const compareIndex = nums2.indexOf(num);
    if (compareIndex !== -1) {
      result.push(num);
      nums2 = nums2.splice(compareIndex + 1, nums2.length);
    }
  }

  return result;
};
