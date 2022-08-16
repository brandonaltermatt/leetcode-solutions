/* https://leetcode.com/problems/rotting-oranges/
You are given an m x n grid where each cell can have one of three values:
    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRottingBfs = function (grid) {
  const maxCol = grid[0].length;
  const maxRow = grid.length;
  const rottenQueue = [];
  let freshCount = 0;
  let minutes = 0;

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (grid[row][col] === 2) rottenQueue.push([row, col]);
      if (grid[row][col] === 1) freshCount++;
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  while ((freshCount !== 0) && (rottenQueue.length !== 0)) {
    minutes++;

    const rotCycle = rottenQueue.length;

    for (let i = 0; i < rotCycle; i++) {
      const [row, col] = rottenQueue.shift();

      directions.forEach(([dy, dx]) => {
        const [yy, xx] = [row + dy, col + dx];

        if (xx < 0 || yy < 0 || xx > maxCol - 1 || yy > maxRow - 1) return;
        if (grid[yy][xx] !== 1) return;

        freshCount--;
        grid[yy][xx] = 2;
        rottenQueue.push([yy, xx]);
      });
    }
  }

  return (freshCount === 0) ? minutes : -1;
};
