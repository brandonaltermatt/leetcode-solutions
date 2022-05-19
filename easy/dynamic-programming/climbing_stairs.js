/* https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n < 3) return n;

  let secondStepCount = 1;
  let firstStepCount = 1;

  for (let i = 2; i <= n; i += 1) {
    const currentStepCount = secondStepCount + firstStepCount;
    secondStepCount = firstStepCount;
    firstStepCount = currentStepCount;
  }

  return firstStepCount;
};

/* Solution using dynamic programming
const climbStairs = function (n) {
  const stepPaths = [0, 1, 2];

  for (let i = 3; i <= n; i += 1) {
    stepPaths[i] = stepPaths[i - 1] + stepPaths[i - 2];
  }

  return stepPaths[n];
};
*/
