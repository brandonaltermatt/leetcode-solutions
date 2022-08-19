/* https://leetcode.com/problems/sort-colors/
Given an array nums with n objects colored red, white, or blue, sort them in-place
so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors2Pass = function (nums) {
  if (nums.length < 2) return nums;

  let [red, white] = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) red++;
    else if (nums[i] === 1) white++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < red) nums[i] = 0;
    else if (i < red + white) nums[i] = 1;
    else nums[i] = 2;
  }
};
