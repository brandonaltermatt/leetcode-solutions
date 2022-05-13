/** https://leetcode.com/problems/maximum-subarray/
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for(let i=0; i<nums.length;i++){
        currentValue = nums[i];
        currentSum = Math.max(currentSum + currentValue, currentValue);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};


/* Succinct but less efficient
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};
*/