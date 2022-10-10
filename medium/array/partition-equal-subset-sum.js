/* https://leetcode.com/problems/partition-equal-subset-sum/
Given a non-empty array nums containing only positive integers,
find if the array can be partitioned into two subsets
such that the sum of elements in both subsets is equal.
Note: There are many solutions for this problem. See here:
// https://leetcode.com/problems/partition-equal-subset-sum/solutions/462699/Whiteboard-Editorial.-All-Approaches-explained
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// DFS of combination tree, branching when index is added to sum, and when it is not, O(2^n)
const canPartitionBacktracking = function (nums) {
  nums.sort((a, b) => b - a); // Get the largest numbers first, so if we fail, we do it fast
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
