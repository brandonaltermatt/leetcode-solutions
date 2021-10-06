/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/
Given an integer n, return the number of prime numbers that are strictly less than n.
*/

class Solution {
    public int countPrimes(int n) {
        //If n<3, there are no primes less than n
        if(n < 3){
            return 0;
        }

        // Assume all n numbers are prime candidates. Remove half of them, because they are even
        // Note:    This removes 2, which is an even prime
        //          This is balanced because we don't count 1, which is an odd prime
        int count = n/2;

        // Make an array of values to ignore when we count the number of primes
        // These are initialized to false automatically
        boolean[] ignored_values = new boolean[n];

        //Mark odd composite numbers as true to indicate they are prime
        //Skip even numbers, we accounted for them by dividing count by 2
        //Only check odds up to sqrt(n), anything past that is redundant
        for(int i=3; (i*i)<n; i+=2){
            if(ignored_values[i]){
                continue;
            }

            // Ignore all multiples of i less than sqrt(n)
            // Skip even multiples of i, they cannot be prime
            for(int j=(i*i); j<n; j+=(2*i)){
                if(!ignored_values[j]){
                    --count;
                    ignored_values[j] = true;
                }
            }
        }

        return count;
    }
}