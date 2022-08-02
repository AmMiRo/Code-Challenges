// Description

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?



// Solution

const searchRange = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  let solution = [-1, -1];

  if (nums.length === 1) {
    if (nums[0] === target) {
      solution = [0, 0];
    } else {
      return solution;
    }
  }

  while (lt < rt && solution[0] === -1) {
    let mid = Math.floor((lt + rt) / 2);

    if (nums[mid] === target) {
      while (nums[mid + 1] === target) {
        mid++;
      }
      solution[1] = mid;
      while (nums[mid - 1] === target) {
        mid--;
      }
      solution[0] = mid;
    } else if (nums[mid] < target) {
      lt = mid + 1;
    } else {
      rt = mid;
    }
  }

  if (lt === rt && nums[lt] === target) {
    solution = [lt, rt];
  }

  return solution;
};
