/* https://leetcode.com/problems/flood-fill/
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and newColor.
You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel,
plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  if(oldColor === newColor) return image;
  const queue = [[sr, sc]];
  
  while(queue.length) {
    const [row, col] = queue.shift();
    if(image[row][col] === oldColor) {
      image[row][col] = newColor
      if(row-1 >= 0) queue.push([row-1, col]);  //up
      if(row+1 < image.length) queue.push([row+1, col]);  //down
      if(col+1 < image[0].length) queue.push([row, col+1]);  //right
      if(col-1 >= 0) queue.push([row, col-1]);  //left
    }
  }
  return image;
};

/* Depth-first search
var floodFill = function(image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if (
    image[sr] === undefined ||
    image[sr][sc] === undefined ||
    image[sr][sc] !== oldColor ||
    image[sr][sc] === newColor
  ) return image;

  image[sr][sc] = newColor;
  floodFill(image, sr+1, sc, newColor, oldColor); // down
  floodFill(image, sr, sc+1, newColor, oldColor); // right
  floodFill(image, sr-1, sc, newColor, oldColor); // up
  floodFill(image, sr, sc-1, newColor, oldColor); // left

  return image;
};
*/