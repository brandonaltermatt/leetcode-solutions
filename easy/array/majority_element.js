/* https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.
*/

/** Boyer-Moore majority vote algorithm
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count) candidate = nums[i];
    count += candidate === nums[i] ? 1 : -1;
  }

  return candidate;
};

/* Sorting and taking from the middle
const majorityElement = function (nums) {
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
};
*/

/* Using a frequency map
const majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
    if (map[nums[i]] >= (nums.length / 2)) return nums[i];
  }
};

*/
