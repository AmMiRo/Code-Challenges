// Description

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.



// Solution

const maxProfit = function (prices) {
  let solution = 0;
  let buy = prices[0];

  for (let price of prices) {
    if (price < buy) {
      buy = price;
    } else if (price - buy > solution) {
      solution = price - buy;
    }
  }

  return solution;
};
