/* https://leetcode.com/problems/counting-bits/
Given an integer n, return an array ans of length n + 1
such that for each i (0 <= i <= n), ans[i] is the number of 1's
in the binary representation of i.
*/

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const counts = new Uint8Array(n + 1);

  for (let i = 1; i < n + 1; i++) {
    counts[i] = counts[i >>> 1] + (i & 1);
  }

  return counts;
};

/* Dynamic programming solution
const countBits = (n) => {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};
*/

/* First solution
const countBits = function (n) {
  const counts = Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    let num = i;
    while (num > 0) {
      counts[i] += num % 2;
      num = Math.floor(num / 2);
    }
  }

  return counts;
};
*/
