/* https://leetcode.com/problems/3sum/
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  // Sort the array, to make it simpler to look for groups
  nums = nums.sort((a, b) => a - b);
  const result = [];

  // Iterate through the array, using the left index as a fixed point
  for (let left = 0; left < nums.length - 2; left++) {
    // If we reach positive numbers, we can stop looking for sums of 0
    if (nums[left] > 0) break;
    // Skip values that are the same as the same as previous, because we don't want duplicate groups
    if ((left > 0) && nums[left] === nums[left - 1]) continue;

    let mid = left + 1;
    let right = nums.length - 1;

    while (mid < right) {
      const sum = nums[left] + nums[mid] + nums[right];
      if (sum === 0) {
        result.push([nums[left], nums[mid], nums[right]]);
        // Skip values that are the same as previous values, to avoid duplicate groups
        while (nums[mid] === nums[mid + 1]) mid++;
        while (nums[right] === nums[right - 1]) right--;
        mid++;
        right--;
      } else if (sum < 0) {
        // Continue to a larger number to offset the small sum
        mid++;
      } else {
        // Continue to a smaller number to offset the large sum
        right--;
      }
    }
  }

  return result;
};
