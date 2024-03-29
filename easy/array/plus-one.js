/* https://leetcode.com/problems/plus-one/
You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order.
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let i = digits.length - 1;

  while ((i >= 0) && (digits[i] === 9)) {
    digits[i--] = 0;
  }

  (i >= 0) ? digits[i]++ : digits.unshift(1);

  return digits;
};
