/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/
Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i if non of the above conditions are true.
*/

import java.util.List;

class Solution {
    public List<String> fizzBuzz(int n) {
        String[] result = new String[n];

        for(int i=1; i<= n; i++){
            if(i%15 == 0){
                result[i-1] = "FizzBuzz";
            }
            else if(i%5 == 0){
                result[i-1] = "Buzz";
            } 
            else if(i%3 == 0){
                result[i-1] = "Fizz";
            }
            else {
                result[i-1] = String.valueOf(i);
            }
        }

        return Arrays.asList(result);
    }
}