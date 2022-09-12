/* https://leetcode.com/problems/subsets/
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const { length } = result;

    for (let j = 0; j < length; j++) {
      result.push(result[j].concat(nums[i]));
    }
  }

  return result;
};
