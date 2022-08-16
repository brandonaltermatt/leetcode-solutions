/* https://leetcode.com/problems/permutations/
Given an array nums of distinct integers, return all the possible permutations.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];

  const findPermutations = (freeNums, fixedNums = []) => {
    if (freeNums.length === 1) {
      result.push(fixedNums.concat(freeNums));
    } else {
      for (let i = 0; i < freeNums.length; i++) {
        const nextFreeNums = [...freeNums];
        const nextFixedNum = nextFreeNums.splice(i, 1);
        findPermutations(nextFreeNums, fixedNums.concat(nextFixedNum));
      }
    }
  };

  findPermutations(nums);

  return result;
};
