/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;

class Solution{
    public int[] intersect(int[] nums1, int[] nums2){
        int[] intersection = new int[nums1.length];
        int i=0, j=0, k=0;

        Arrays.sort(nums1);
        Arrays.sort(nums2);

        while((i < nums1.length) && (j < nums2.length)){
            int nums1_current = nums1[i];
            int nums2_current = nums2[j];

            if(nums1_current < nums2_current){
                i++;
            } else if(nums1_current > nums2_current){
                j++;
            } else {
                intersection[k] = nums1_current;
                i++;
                j++;
                k++;
            }
        }

        return Arrays.copyOfRange(intersection, 0, k);
    }
}

/* Solution for unsorted arrays with a hash map and an arraylist
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
*/