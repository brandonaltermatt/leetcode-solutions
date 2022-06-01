/* https://leetcode.com/problems/single-number/
Given a non-empty array of integers nums,
every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};

/* Hash map solution, O(n) time and O(n) space
const singleNumber = function (nums) {
  const hash = {};

  nums.every((num) => {
    hash[num] ? delete hash[num] : hash[num] = 1;
  });

  return Object.keys(hash)[0];
};
*/

/* Initial Solution, O(2n) time and O(1) space
const singleNumber = function (nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i + 1] !== nums[i]) return nums[i];
  }

  return nums[nums.length - 1];
};
*/
