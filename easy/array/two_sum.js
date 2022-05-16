/* https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const currentValue = nums[i];
    const complementPair = target - currentValue;

    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    }
    map[currentValue] = i;
  }

  return false;
};

/* Solution that iterates twice with indexOf
 var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const secondIndex = nums.indexOf(target - nums[i]);
    if ((secondIndex !== -1) && (secondIndex !== i)) return [i, secondIndex];
  }
};
*/
