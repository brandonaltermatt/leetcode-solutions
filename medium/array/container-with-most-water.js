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
// Use two pointers, move the pointer at the lesser height until a greater height is found. O(n)
const maxAreaTwoPointers = function (height) {
  if (!height || height.length < 2) return 0;

  let maxHeight = 0;
  let [leftIndex, rightIndex] = [0, height.length - 1];

  while (leftIndex < rightIndex) {
    const minHeight = Math.min(height[leftIndex], height[rightIndex]);
    maxHeight = Math.max(maxHeight, (rightIndex - leftIndex) * minHeight);

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
      while (height[leftIndex] < minHeight) leftIndex++;
    } else {
      rightIndex--;
      while (height[rightIndex] < minHeight) rightIndex--;
    }
  }

  return maxHeight;
};

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
