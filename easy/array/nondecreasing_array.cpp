/*
https://leetcode.com/problems/non-decreasing-array/
Given an array nums with n integers, your task is to check 
if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds 
for every i (0-based) such that (0 <= i <= n - 2).
*/

using namespace std;
#include <vector>

class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        int check=0;

        for(auto i=1; i<nums.size(); ++i){
            if(nums[i-1] > nums[i]){
                check++;
                if(i-2<0 || nums[i-2]<=nums[i]){
                    nums[i-1] = nums[i];
                }else{
                    nums[i] = nums[i-1];
                }
                if(check>1) return false;
            }
        }

        return true;
    }
};