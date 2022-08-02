// Description

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.



// Solution

const maxDepth = function (root) {
  const maxSum = function (node, sum) {
    if (node === null) {
      return sum;
    }

    return Math.max(maxSum(node.left, sum + 1), maxSum(node.right, sum + 1));
  };

  return maxSum(root, 0);
};
