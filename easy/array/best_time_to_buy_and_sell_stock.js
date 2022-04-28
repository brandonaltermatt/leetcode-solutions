/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let smallestPrice = prices[0];
    let maxProfit = -1;

    for (let currentPrice of prices){
      if (currentPrice < smallestPrice) smallestPrice = currentPrice;
      else if ((currentPrice - smallestPrice) > maxProfit) maxProfit = currentPrice - smallestPrice;
    }

    return maxProfit;
};

/* 
var maxProfit = function(prices) {
  let maxProfit = 0;
  let buyIndex = 0;
  let sellIndex = 1;

  while (sellIndex < prices.length) {
    if (prices[buyIndex] < prices[sellIndex]) {
      let profit = prices[sellIndex] - prices[buyIndex];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      buyIndex = sellIndex;
    }
    sellIndex += 1;
  }

  return maxProfit;
};
 */