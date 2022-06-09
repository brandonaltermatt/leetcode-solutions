/* https://leetcode.com/problems/palindrome-number/
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
    For example, 121 is a palindrome while 123 is not.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if ((x < 0) || ((x % 10 === 0) && (x !== 0))) return false;
  if (x < 10) return true;

  let reversed = 0;
  while (reversed < x) {
    reversed *= 10;
    reversed += x % 10;
    x = ~~(x / 10);
  }

  return (reversed === x) || (~~(reversed / 10) === x);
};

/* Solution using string and loop
const isPalindrome = function (x) {
  if (x < 0) return false;

  x = x.toString();

  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    if (x.charAt(i) !== x.charAt(x.length - i)) return false;
  }

  return true;
};
*/

/* Solution using string functions
const isPalindrome = function (x) {
  if (x < 0) return false;

  const reverse = `${x}`.split('').reverse().join('');

  return x == reverse;
};
*/
