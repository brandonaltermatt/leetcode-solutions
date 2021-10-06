/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

// Solution using power function
class Solution {
    public boolean isPowerOfThree(int n) {
        return n==0 ? false : n==Math.pow(3, Math.round(Math.log(n) / Math.log(3)));
    }
}

/* Solution using logarithms
class Solution {
    public boolean isPowerOfThree(int n) {
        return (Math.log10(n) / Math.log10(3)) % 1 == 0;
    }
}
*/