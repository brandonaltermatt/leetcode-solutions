/* https://leetcode.com/problems/merge-intervals/
Given an array of intervals where intervals[i] = [starti, endi],
merge all overlapping intervals, and return an array of the non-overlapping intervals
that cover all the intervals in the input.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeInPlace = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  while (i < intervals.length) {
    const prev = intervals[i - 1];
    const current = intervals[i];

    if (prev[1] >= current[0]) {
      intervals[i - 1] = [prev[0], Math.max(prev[1], current[1])];
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  return intervals;
};
