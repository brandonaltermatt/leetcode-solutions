/* https://leetcode.com/problems/subsets/
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsIterative = function (nums) {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const { length } = result;

    for (let j = 0; j < length; j++) {
      result.push(result[j].concat(nums[i]));
    }
  }

  return result;
};

const subsetsDfs = function (nums) {
  const result = [];

  const dfs = (subset, index) => {
    result.push(subset);
    for (let i = index; i < nums.length; i++) {
      const newSubset = subset.concat(nums[i]);
      dfs(newSubset, i + 1);
    }
  };

  dfs([], 0);

  return result;
};

const subsetsBitManipulation = function (nums) {
  const result = [];
  const powerSetLength = 1 << nums.length;

  for (let i = 0; i < powerSetLength; i++) {
    const newSubset = [];
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) newSubset.push(nums[j]);
    }
    result.push(newSubset);
  }

  return result;
};

const subsetsOneLine = (nums) => nums.reduce((s, l) => s.concat(s.map((t) => t.concat(l))), [[]]);
