/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);

        for(int i=0; i<nums.length-1; i++){
            if(nums[i] == nums[i+1]){
                return true;
            }
        }

        return false;
    }
}

/* Solution using a HashSet
class Solution{
    public boolean containsDuplicate(int[] nums){
        Set<Integer> hash_set = new HashSet<>();

        for(int number : nums){
            if(hash_set.add(number) == false) return true;
        }

        return false;
    }
}
*/

/* Solution using a frequency map
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Map<Integer, Integer> frequencies = new HashMap<>();

        for(int current : nums){
            frequencies.put(current, frequencies.getOrDefault(current, 0) + 1);
        }

        for(Map.Entry<Integer, Integer> val : frequencies.entrySet()){
            if(val.getValue() > 1){
                return true;
            }
        }

        return false;
    }
}
*/