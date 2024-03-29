// Description

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Follow up: Solve it both recursively and iteratively.



// Solution

const isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  return mirrored(root.left, root.right);
};

const mirrored = function (left, right) {
  if (left === null || right === null) {
    return left === right;
  }

  if (left.val !== right.val) {
    return false;
  }

  return mirrored(left.left, right.right) && mirrored(left.right, right.left);
};
