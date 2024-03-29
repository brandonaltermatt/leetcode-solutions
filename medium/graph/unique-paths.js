/* https://leetcode.com/problems/unique-paths/
There is a robot on an m x n grid. The robot is initially located
at the top-left corner (i.e., grid[0][0]).The robot tries to move
to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot
can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths
that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Cache redundant calculations using bottom-up tabulation, O(m*n)
const uniquePathsTabulation = function (m, n) {
  const tab = Array.from(Array(m), () => new Array(n).fill(1));

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      tab[row][col] = tab[row - 1][col] + tab[row][col - 1];
    }
  }

  return tab[m - 1][n - 1];
};

// Cache redundant calculations using top-down memoization, O(m*n)
const uniquePathsMemoization = function (m, n) {
  const memo = Array.from(Array(m), () => new Array(n).fill(0));

  const dfs = (row, col) => {
    if ((row === (m - 1)) && (col === (n - 1))) return 1;
    if ((row > (m - 1)) || (col > (n - 1))) return 0;
    if (memo[row][col] !== 0) return memo[row][col];

    memo[row][col] = dfs(row + 1, col) + dfs(row, col + 1);
    return memo[row][col];
  };

  return dfs(0, 0);
};

// Try every possible path, O(2^(m+n))
const uniquePathsBruteForce = function (m, n, i = 0, j = 0) {
  const dfs = (row, col) => {
    if ((row === (m - 1)) && (col === (n - 1))) return 1;
    if ((row > (m - 1)) || (col > (n - 1))) return 0;

    return dfs(row + 1, col) + dfs(row, col + 1);
  };

  return dfs(0, 0);
};
