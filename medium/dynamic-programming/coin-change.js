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
const coinChangeTabulation = function (coins, amount) {
  const tab = new Array(amount + 1).fill(Infinity);
  tab[0] = 0;

  for (let i = 1; i < tab.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        tab[i] = Math.min(tab[i - coins[j]] + 1, tab[i]);
      }
    }
  }

  return tab[amount] === Infinity ? -1 : tab[amount];
};

// Recursion using memoization to cache overlapping subproblems
const coinChangeMemoization = function (coins, amount) {
  const minChange = (denominations, remainder, memo) => {
    if (remainder === 0) return 0;
    if (remainder < 0) return -1;
    if (memo[remainder]) return memo[remainder];

    let minCount = Infinity;

    for (let i = 0; i < denominations.length; i++) {
      const currentCount = minChange(denominations, remainder - denominations[i], memo);
      if ((currentCount >= 0) && (currentCount < minCount)) {
        minCount = 1 + currentCount;
      }
    }

    memo[remainder] = (minCount === Infinity) ? -1 : minCount;

    return memo[remainder];
  };

  return minChange(coins, amount, []);
};

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
