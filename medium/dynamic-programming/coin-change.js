/* https://leetcode.com/problems/coin-change/
You are given an integer array coins representing coins of different denominations
and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Inefficient recursive solution, recomputes overlapping subproblems
const coinChangeRecursion = function (coins, amount) {
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCount = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const currentCount = coinChangeRecursion(coins, amount - coins[i]);
    if (currentCount !== -1) minCount = Math.min(minCount, currentCount + 1);
  }

  return minCount === Infinity ? -1 : minCount;
};
