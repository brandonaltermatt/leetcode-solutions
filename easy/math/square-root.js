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
const mySqrtNewtons = function (x) {
  let r = x;

  while ((r * r) > x) {
    r = (((r + x) / r) / 2) | 0;
  }

  return r;
};

const mySqrtBinarySearch = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = x;

  while ((right - left) > 1) {
    const middle = Math.floor((left + right) / 2);
    const sqrt = middle * middle;
    if (sqrt > x) {
      right = middle;
    } else if (sqrt < x) {
      left = middle;
    } else {
      return middle;
    }
  }

  return left;
};

const mySqrtBitwise = function (x) {
  let ans = 0;
  let bit = 1 << 16;

  while (bit > 0) {
    ans |= bit;
    if (ans * ans > x) {
      ans ^= bit;
    }
    bit >>= 1;
  }

  return ans;
};

const mySqrtSubtraction = function (x) {
  let i = 0;

  while (x > 0) {
    x -= i + 1;
    i += 2;
  }

  return (x === 0) ? (i / 2) : (i / 2) - 1;
};
