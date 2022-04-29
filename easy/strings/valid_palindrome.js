/* https://leetcode.com/problems/valid-palindrome/
Given a string s, convert remove all non-alphanumeric characters,
then return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLocaleLowerCase();

    for (let i = 0; i < s.length / 2; i += 1) {
      if (s[i] !== s[s.length - 1 - i]) return false;
    }

    return true;
};