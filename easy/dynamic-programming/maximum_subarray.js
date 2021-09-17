/** https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max_sum = -Infinity;
    let current_sum = 0;

    for(let i=0; i<nums.length;i++){
        current_value = nums[i];
        current_sum = Math.max(current_sum + current_value, current_value);
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum;
};