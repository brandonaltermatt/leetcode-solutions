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
// This can be a knapsack problem, where we want to find a combination that sums to sum(nums)/2.
// We'll create a matrix to represent our possible knapsack choices.
// We want to find a combination C[i][w] where the first i items sums to w.
const canPartitionKnapsack = function (nums) {
  const numsSum = nums.reduce((acc, curr) => acc + curr);
  if ((numsSum % 2) !== 0) return false;

  // Create a row with space for each num, plus 0
  let matrix = new Array(nums.length + 1).fill(null);
  // Create columns with space for sums up to half the sum of nums
  matrix = matrix.map((column) => Array((numsSum / 2) + 1).fill(false));

  // Represents whether we can get sum = 0 with 0 elements
  matrix[0][0] = true;

  for (let i = 1; i <= nums.length; i++) {
    const currentNum = nums[i - 1];

    for (let j = 0; j <= numsSum / 2; j++) {
      if (j - currentNum >= 0) {
        matrix[i][j] = matrix[i - 1][currentNum] || matrix[i - 1][j];
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }

  return matrix[nums.length][numsSum / 2];
};

// Checks every combination of sums to find if one equals half the sum of nums, O(2^n)
const canPartitionHashSet = function (nums) {
  const totalSum = nums.reduce((acc, curr) => acc + curr);
  if ((totalSum % 2) !== 0) return false;

  const target = totalSum / 2;

  const memo = new Set([0]);

  for (let i = 0; i < nums.length; i++) {
    const possibleSums = Array.from(memo);

    for (let j = 0; j < possibleSums.length; j++) {
      memo.add(possibleSums[j] + nums[i]);
    }
  }

  return memo.has(target);
};

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
