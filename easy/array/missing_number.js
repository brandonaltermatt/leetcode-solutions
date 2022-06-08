/* https://leetcode.com/problems/missing-number/
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

/* Using xor
const missingNumber = function (nums) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < nums.length; i++) {
    x ^= i;
    y ^= nums[i];
  }
  x ^= nums.length;

  return x ^ y;
};
*/

/* Solution using a hash map
const missingNumber = function (nums) {
  const map = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++;
  }

  const result = map.indexOf(0);

  return result === -1 ? nums.length : result;
};
*/
