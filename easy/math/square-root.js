/* https://leetcode.com/problems/sqrtx/
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated,
and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator,
such as pow(x, 0.5) or x ** 0.5.
*/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) return 0;

  let i = 0;

  while (x > 0) {
    x -= i + 1;
    i += 2;
  }

  return (x === 0) ? (i / 2) : (i / 2) - 1;
};
