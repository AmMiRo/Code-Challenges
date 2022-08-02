// Description

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]



// Solution

const merge = function (nums1, m, nums2, n) {
  let pointer = nums1.length - 1;

  while (pointer >= 0) {
    if (nums1[m - 1] >= nums2[n - 1] || n - 1 < 0) {
      nums1[pointer] = nums1[m - 1];
      m--;
      pointer--;
    } else if (nums1[m - 1] < nums2[n - 1] || m - 1 < 0) {
      nums1[pointer] = nums2[n - 1];
      n--;
      pointer--;
    }
  }

  return nums1;
};
