/* https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
  }

  return false;
};

/* Using Set, one line but doesn't break out early
const containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};
*/

/* Using sort, which is O(1) space, but mutates input
const containsDuplicate = function (nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
};
*/
