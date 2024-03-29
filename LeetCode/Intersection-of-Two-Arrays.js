// Description

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]



// Solution

const intersection = function (nums1, nums2) {
  const compareSet = new Set(nums1);

  const resultSet = new Set();

  for (const num of nums2) {
    if (compareSet.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
};
