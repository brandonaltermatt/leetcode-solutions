/* https://leetcode.com/problems/binary-search/
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let [leftIndex, rightIndex] = [0, nums.length - 1];
  let midIndex;

  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((rightIndex + leftIndex) / 2);
    nums[midIndex] <= target ? leftIndex = midIndex + 1 : rightIndex = midIndex - 1;
  }

  return nums[rightIndex] == target ? rightIndex : -1;
};

/* Recursive solution
var search = function(nums, target) {
  const leftIndex = 0;
  const rightIndex = nums.length - 1;
  
  return binarySearch(nums, leftIndex, rightIndex, target);
};

function binarySearch(nums, leftIndex, rightIndex, target) {
  if (leftIndex <= rightIndex) {
    const midIndex = Math.floor(((rightIndex+leftIndex)/2));
  
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (target < nums[midIndex]) {
      return binarySearch(nums, leftIndex, midIndex - 1, target);
    } else {
      return binarySearch(nums, midIndex + 1, rightIndex, target);
    }
  }
  
  return -1;
}
*/

/* First iterative solution without optimizations
var search = function(nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let midIndex;

  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    const midValue = nums[midIndex];

    if (target === midValue) {
      return midIndex;
    } else if (target < midValue) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
};
*/