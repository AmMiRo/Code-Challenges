// Description

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// Solution

const hammingDistance = function (x, y) {
  const xBi = x.toString(2);
  const yBi = y.toString(2);

  let ix = xBi.length - 1;
  let iy = yBi.length - 1;
  let solution = 0;

  while (!(ix < 0 && iy < 0)) {
    const xx = ix >= 0 ? xBi[ix] : "0";
    const yy = iy >= 0 ? yBi[iy] : "0";
    const same = xx === yy;

    if (!same) {
      solution++;
    }

    ix--;
    iy--;
  }

  return solution;
};
