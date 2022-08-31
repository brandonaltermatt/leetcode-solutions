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
