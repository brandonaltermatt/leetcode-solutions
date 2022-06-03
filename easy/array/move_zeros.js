/* https://leetcode.com/problems/move-zeroes/
Given an integer array nums, move all 0's to the end of it
while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let lastZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastZeroFoundAt++] = nums[i];
    }
  }

  for (let i = lastZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/* O(1) space, O(n) time, but skips loop iterations where nums[i] = 0
const moveZeroes = function (nums) {
  let numberOfZeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numberOfZeros++;
    } else if (numberOfZeros > 0) {
      [nums[i], nums[i - numberOfZeros]] = [nums[i - numberOfZeros], nums[i]];
    }
  }
};
*/

/* O(1) space, O(n) time, but skips loop iterations where nums[i] = 0
const moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt++;
    }
  }

  return nums;
};
*/
