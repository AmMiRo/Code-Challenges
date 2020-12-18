// Description

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Solution

const relativeSortArray = function (arr1, arr2) {
  // declare variables (i, j)
  let i = 0;
  let j = 0;

  // sort arr1
  arr1 = arr1.sort((a, b) => a - b);

  // loop through arr2
  for (const element of arr2) {
    // move pointers and swap values in arr1
    while (arr1[j] !== element) j++;
    while (arr1[j] === element) {
      const temp = arr1[j];
      arr1[j] = arr1[i];
      arr1[i] = temp;
      i++;
      j++;
    }
    j = i;
  }

  // sort leftover elements
  arr1 = arr1
    .slice(0, i)
    .concat(arr1.slice(i, arr1.length).sort((a, b) => a - b));

  // return arr1
  return arr1;
};
