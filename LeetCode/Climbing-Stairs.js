// Description

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Solution

const climbStairs = function (n) {
  let recurFun = function (numStairs, solutions) {
    if (numStairs === 0) {
      return 1;
    } else if (numStairs < 0) {
      return 0;
    }

    if (solutions[numStairs]) {
      return solutions[numStairs];
    }

    solutions[numStairs] =
      recurFun(numStairs - 1, solutions) + recurFun(numStairs - 2, solutions);

    return solutions[numStairs];
  };

  return recurFun(n, {});
};
