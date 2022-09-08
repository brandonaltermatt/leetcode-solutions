/* https://leetcode.com/problems/spiral-matrix/
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = [];

  if ((matrix === null) || (matrix.length === 0)) return result;

  const [n, m] = [matrix.length, matrix[0].length];
  let [topLimit, bottomLimit, leftLimit, rightLimit] = [0, n - 1, 0, m - 1];

  while (result.length < (n * m)) {
    for (let i = leftLimit; i <= rightLimit; i++) {
      if (result.length === (n * m)) break;
      result.push(matrix[topLimit][i]);
    }
    topLimit++;

    for (let i = topLimit; i <= bottomLimit; i++) {
      if (result.length === (n * m)) break;
      result.push(matrix[i][rightLimit]);
    }
    rightLimit--;

    for (let i = rightLimit; i >= leftLimit; i--) {
      if (result.length === (n * m)) break;
      result.push(matrix[bottomLimit][i]);
    }
    bottomLimit--;

    for (let i = bottomLimit; i >= topLimit; i--) {
      if (result.length === (n * m)) break;
      result.push(matrix[i][leftLimit]);
    }
    leftLimit++;
  }

  return result;
};
