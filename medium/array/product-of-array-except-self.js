/* https://leetcode.com/problems/product-of-array-except-self/
Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution using 3 loops, O(3N) == O(N)
const productExceptSelfThreeLoops = function (nums) {
  const prefixes = new Array(nums.length);
  const suffixes = new Array(nums.length);
  const result = new Array(nums.length);

  prefixes[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefixes[i] = prefixes[i - 1] * nums[i - 1];
  }

  suffixes[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixes[i] = suffixes[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixes[i] * suffixes[i];
  }

  return result;
};

// Solution using division, O(4N) == O(N)
const productExceptSelfWithDivision = function (nums) {
  const zeroCount = nums.filter((num) => (num === 0)).length;
  if (zeroCount > 1) return nums.fill(0);

  const product = nums.reduce(
    (previousValue, currentValue) => previousValue * (currentValue || 1),
    1,
  );

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount) {
      nums[i] = nums[i] === 0 ? product : 0;
    } else {
      nums[i] = (product / nums[i]);
    }
  }

  return nums;
};
