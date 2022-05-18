/* eslint-disable implicit-arrow-linebreak */
/** https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
 * which causes all the following ones to be bad.
 * You are given an API bool isBadVersion(version) which returns whether version is bad.
 * Implement a function to find the first bad version.
 */

/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) =>
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  function (n) {
    let left = 1;

    while (left <= n) {
      const middle = Math.floor((left + n) / 2);

      if (isBadVersion(middle)) {
        if (left === n) return middle;
        n = middle;
      } else {
        left = middle + 1;
      }
    }
  };
