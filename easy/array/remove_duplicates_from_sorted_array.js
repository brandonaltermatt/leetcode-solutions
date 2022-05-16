/* eslint-disable no-param-reassign */
/* https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
such that each unique element appears only once.
The relative order of the elements should be kept the same.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let currentIndex = 0;

  for (let index = 1; index < nums.length; index += 1) {
    if (nums[currentIndex] !== nums[index]) {
      nums[currentIndex += 1] = nums[index];
    }
  }

  return currentIndex + 1;
};
