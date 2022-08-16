/* https://leetcode.com/problems/number-of-islands/
Given an m x n 2D binary grid grid which represents a map
of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const maxRow = grid.length;
  const maxCol = grid[0].length;
  let result = 0;

  const floodFill = (row, col) => {
    if (row < 0
      || col < 0
      || row > maxRow - 1
      || col > maxCol - 1
      || grid[row][col] !== '1'
    ) return;

    grid[row][col] = '0';

    floodFill(row + 1, col);
    floodFill(row, col + 1);
    floodFill(row - 1, col);
    floodFill(row, col - 1);

    return 1;
  };

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (grid[row][col] === '1') {
        result += floodFill(row, col);
      }
    }
  }

  return result;
};
