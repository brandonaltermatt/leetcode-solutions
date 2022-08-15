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
  const maxRow = grid[0].length;
  const maxCol = grid.length;
  let result = 0;

  const floodFill = (col, row) => {
    if (col < 0
      || row < 0
      || col > maxCol - 1
      || row > maxRow - 1
      || grid[col][row] !== '1'
    ) return;

    grid[col][row] = '0';

    floodFill(col + 1, row);
    floodFill(col, row + 1);
    floodFill(col - 1, row);
    floodFill(col, row - 1);

    return 1;
  };

  for (let col = 0; col < maxCol; col++) {
    for (let row = 0; row < maxRow; row++) {
      if (grid[col][row] === '1') {
        result += floodFill(col, row);
      }
    }
  }

  return result;
};
