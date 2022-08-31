/* https://leetcode.com/problems/partition-equal-subset-sum/
Given a non-empty array nums containing only positive integers,
find if the array can be partitioned into two subsets
such that the sum of elements in both subsets is equal.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Checks every combination to find if one equals half the sum of nums, O(2^n)
const canPartitionHashSet = function (nums) {
  const totalSum = nums.reduce((acc, curr) => acc + curr);
  if (totalSum % 2) return false;

  const target = totalSum / 2;

  const memo = new Set([0]);

  nums.forEach((num) => {
    const possibleSums = Array.from(memo);
    possibleSums.forEach((possibleSum) => {
      memo.add(possibleSum + num);
    });
  });

  return memo.has(target);
};

// Depth first search of combination tree, branching when index is added to sum, and when it is not
const canPartitionBacktracking = function (nums) {
  nums.sort((a, b) => b - a);
  const totalSum = nums.reduce((acc, curr) => acc + curr);
  if (totalSum % 2) return false;

  const target = totalSum / 2;

  const backtracking = (currSum, index) => {
    if ((currSum > target) || (index >= nums.length)) return false;
    if (currSum === target) return true;

    return backtracking(currSum + nums[index], index + 1) || backtracking(currSum, index + 1);
  };

  return backtracking(0, 0);
};
