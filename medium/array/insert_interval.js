/* https://leetcode.com/problems/insert-interval/
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
represent the start and the end of the ith interval and intervals is sorted
in ascending order by starti. You are also given an interval newInterval = [start, end]
that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order
by starti and intervals still does not have any overlapping intervals
(merge overlapping intervals if necessary).

Return intervals after the insertion.
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  const size = intervals.length;
  const result = [];
  let index = 0;

  while ((index < size) && (intervals[index][1] < newInterval[0])) {
    result.push(intervals[index++]);
  }

  while ((index < size) && (intervals[index][0] <= newInterval[1])) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }

  result.push(newInterval);

  while (index < size) {
    result.push(intervals[index++]);
  }

  return result;
};
