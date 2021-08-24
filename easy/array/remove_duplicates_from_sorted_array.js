/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
 * such that each unique element appears only once. 
 * The relative order of the elements should be kept the same.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let current_index = 0;

    for(let index=1; index < nums.length; index++){
        if(nums[current_index] !== nums[index]){
            nums[++current_index] = nums[index];
        }
    }

    return current_index+1;
};