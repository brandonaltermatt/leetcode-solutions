/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        int[] nums_copy = nums.clone();

        System.arraycopy(nums_copy, 0, nums, k, nums_copy.length-k);
        System.arraycopy(nums_copy, nums_copy.length-k, nums, 0, k);
    }
}

/* Solution implementing custom reverse function
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
*/