import java.util.HashMap;
import java.util.Map;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
Given a string s, find the first non-repeating character in it and return its index.
If it does not exist, return -1.
*/

public class Solution {
    public int firstUniqChar(String s) {
        int frequencies [] = new int[26];
        for(int i = 0; i < s.length(); i++)
            frequencies[s.charAt(i)-'a']++;
        for(int i = 0; i < s.length(); i++)
            if(frequencies[s.charAt(i)-'a'] == 1)
                return i;
        return -1;
    }
}

/* Solution using a HashMap
class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> frequencies = new HashMap<>();

        for(int i=0; i<s.length(); i++){
            char character = s.charAt(i);
            frequencies.put(character, frequencies.getOrDefault(character, 0) + 1);
        }

        for(int i=0; i<s.length(); i++){
            char character = s.charAt(i);
            if(frequencies.get(character) == 1){
                return i;
            }
        }

        return -1;
    }
}
*/