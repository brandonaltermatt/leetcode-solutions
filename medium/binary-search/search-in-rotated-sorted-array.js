/* https://leetcode.com/problems/search-in-rotated-sorted-array/
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown
pivot index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if ((nums[left] <= target) && (target < nums[mid])) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
      // Otherwise, the right side is sorted
    } else if ((nums[mid] < target) && (target <= nums[right])) {
      // target is in the right
      left = mid + 1;
    } else {
      // target is in the left
      right = mid - 1;
    }
  }

  return -1;
};
