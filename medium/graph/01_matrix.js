/* https://leetcode.com/problems/01-matrix/
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/*
DP solution must be done in two passes because it relies on previously calculated values,
and it is impossible to know if cells in all 4 directions have been previously calculated
in the first pass. Therefore the first pass will go from the top left to the bottom right,
and the second pass will go from the bottom right to the top left.
In this way, we will process cells in only two directions at a time:
Top and left for the first pass on each cell,
and bottom and right for the second pass on each cell.
*/
const updateMatrix = function (matrix) {
  const endRow = matrix.length;
  const endCol = matrix[0].length;

  for (let row = 0; row < endRow; row++) {
    for (let col = 0; col < endCol; col++) {
      if (matrix[row][col] === 0) continue;
      const top = (row - 1 >= 0) ? matrix[row - 1][col] : Infinity;
      const left = (col - 1 >= 0) ? matrix[row][col - 1] : Infinity;
      matrix[row][col] = Math.min(top, left) + 1;
    }
  }

  for (let row = endRow - 1; row >= 0; row--) {
    for (let col = endCol - 1; col >= 0; col--) {
      if (matrix[row][col] === 0) continue;
      const bottom = (row + 1 < endRow) ? matrix[row + 1][col] : Infinity;
      const right = (col + 1 < endCol) ? matrix[row][col + 1] : Infinity;
      matrix[row][col] = Math.min(matrix[row][col], (Math.min(bottom, right) + 1));
    }
  }

  return matrix;
};

/* Breadth first search solution
const updateMatrix = function (matrix) {
  const queue = [];
  const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  const endRow = matrix.length;
  const endCol = matrix[0].length;

  // Find all 0s in matrix, add positions of 0s to queue.
  // Set all 1s to infinity, do not add to queue.
  for (let row = 0; row < endRow; row++) {
    for (let col = 0; col < endCol; col++) {
      if (matrix[row][col] === 0) {
        queue.push([row, col, 0]);
      } else {
        matrix[row][col] = Infinity;
      }
    }
  }

  while (queue.length) {
    const [row, col, distance] = queue.shift();

    // Set current cell value to distance from the nearest 0.
    if (matrix[row][col] > distance) {
      matrix[row][col] = distance;
    }

    // If neighbor exists and is infinity, add to queue with 1 plus current distance from nearest 0.
    directions.forEach((direction) => {
      const [newRow, newCol] = [row + direction[0], col + direction[1]];
      if ((newRow < 0) || (newCol < 0) || (newRow > endRow - 1) || (newCol > endCol - 1)) return;
      if (matrix[newRow][newCol] === Infinity) queue.push([newRow, newCol, distance + 1]);
    });
  }

  return matrix;
};
*/
