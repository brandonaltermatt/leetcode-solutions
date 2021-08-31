/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
**/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let step_count = [];
    step_count [1]=1;
    step_count [2]=2;
    for(let i=3; i<=n; i++){
        step_count[i] = step_count[i-1] + step_count[i-2];
    }
    return step_count[n];
};