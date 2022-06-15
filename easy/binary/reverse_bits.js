/* https://leetcode.com/problems/reverse-bits/
Reverse bits of a given 32 bits unsigned integer.
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (n >> i) & 1;
    res |= (bit << (31 - i));
  }

  return res >>> 0;
};

/* Another binary solution
const reverseBits = function (n) {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n >>= 1;
  }

  return result;
};
*/

/* Solution using string manipulation
const reverseBits = function (n) {
  n = n.toString(2).padStart(32, '0').split('');

  for (let i = 0; i < Math.floor(n.length / 2); i++) {
    [n[i], n[n.length - i - 1]] = [n[n.length - i - 1], n[i]];
  }

  return parseInt(n.join(''), 2);
};
*/
