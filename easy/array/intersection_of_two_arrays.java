import java.util.ArrayList;
import java.util.Map;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.
*/

class Solution{
    public int[] intersect(int[] nums1, int[] nums2){
        Map<Integer, Integer> frequencies = new HashMap<>();
        ArrayList<Integer> intersection = new ArrayList<>();
        int[] result;

        for(int current : nums1){
            int current_frequency = frequencies.getOrDefault(current, 0);
            frequencies.put(current, current_frequency + 1);
        }

        for(int current : nums2){
            if(frequencies.get(current) == null) continue;
            if(frequencies.get(current) == 0) continue;
            intersection.add(current);
            frequencies.put(current, frequencies.get(current) - 1);
        }

        result = new int[intersection.size()];
        result = intersection.stream().mapToInt(i -> i).toArray();
        return result;
    }
}