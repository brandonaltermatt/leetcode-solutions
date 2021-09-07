/** https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing 
 * each of them is that adjacent houses have security systems connected and it will automatically 
 * contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
    var rob = function(nums) {
    let money = [];
    money[0] = 0;
    money[1] = nums[0];
  
    for(let i=1; i<nums.length; i++){
        let current_house = nums[i];
        money[i+1] = Math.max(money[i], money[i-1]+current_house);
    }
    return money[money.length-1];
    };

/** Solution with temporary variables
 var rob = function(nums) {
    let prev1 = 0;
    let prev2 = 0;
    let tmp =0;

    for(let i=0; i<nums.length; i++){
        tmp = prev1;
        prev1 = Math.max(prev2+nums[i], prev1);
        prev2 = tmp;
    }
    return prev1;
};
 */