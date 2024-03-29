// Description

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).



// Solution

const maxProfit = function (prices) {
  let solution = 0;

  let prev = prices[0];

  for (let price of prices) {
    let dif = price - prev;
    if (dif > 0) {
      solution += dif;
    }
    prev = price;
  }

  return solution;
};
