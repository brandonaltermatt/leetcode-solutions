import java.util.Arrays;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one.
*/

class Solution{
    public int singleNumber(int[] nums){
        int xor_value = 0;

        for(int i=0; i<nums.length; i++){
            xor_value ^= nums[i];
        }

        return xor_value;
    }
}

/* Solution using sorted array
class Solution{
    public int singleNumber(int[] nums){
        Arrays.sort(nums);
        int i;

        for(i=0; i<nums.length-2; i+=2){
            if(nums[i] != nums[i+1]) return nums[i];
        }

        return nums[i];
    }
}
*/