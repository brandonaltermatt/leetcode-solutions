/* https://leetcode.com/problems/squares-of-a-sorted-array/
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  let i = right;

  while (left <= right) {
    result[i--] = ((nums[left] ** 2) > (nums[right] ** 2)) ? nums[left++] ** 2 : nums[right--] ** 2;
  }

  return result;
};

/* Solution using sort function.
const sortedSquares = function (nums) {
  return nums.map((element) => element ** 2).sort((a, b) => a - b);
};
*/
