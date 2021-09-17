/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
*/

class Solution {
    public int reverse(int x) {
        long reversed = 0;

        while(x != 0){
            int current_digit = x % 10;
            x /= 10;

            reversed = reversed*10 + current_digit;
            if(reversed > Integer.MAX_VALUE || reversed < Integer.MIN_VALUE){
                return 0;
            }
        }

        return (int) reversed;
    }
}