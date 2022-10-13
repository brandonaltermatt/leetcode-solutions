/* https://leetcode.com/problems/container-with-most-water/
You are given an integer array height of length n.
There are n vertical lines drawn such that the two endpoints
of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container,
such that the container contains the most water.
Return the maximum amount of water a container can store.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
// Compute the area between every possible set of lines. O(n^2)
const maxAreaBruteForce = function (height) {
  let result = 0;

  for (let start = 0; start < height.length; start++) {
    for (let end = 1; end < height.length; end++) {
      const currentArea = (end - start) * Math.min(height[start], height[end]);
      result = Math.max(result, currentArea);
    }
  }

  return result;
};
