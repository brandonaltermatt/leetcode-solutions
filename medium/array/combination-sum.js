/* https://leetcode.com/problems/combination-sum/
Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers sum to target.
You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times.
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up
to target is less than 150 combinations for the given input.
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const results = [];

  const findCombinations = (combination = [], sum = 0, index = 0) => {
    if (sum > target) return;
    if (sum === target) results.push(combination);

    for (let i = index; i < candidates.length; i++) {
      findCombinations([...combination, candidates[i]], sum + candidates[i], i);
    }
  };

  findCombinations();

  return results;
};
