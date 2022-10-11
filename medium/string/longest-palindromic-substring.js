/* https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, return the longest palindromic substring in s.
A string is called a palindrome string if the reverse
of that string is the same as the original string.
*/

/**
 * @param {string} s
 * @return {string}
 */
// Test whether every possible substring is a palindrome, and return the longest one. O(n^3)
const longestPalindromeBruteForce = function (s) {
  const isPalindrome = function (str) {
    let [start, end] = [0, str.length - 1];

    while (start < end) {
      if (str.charAt(start++) !== str.charAt(end--)) return false;
    }

    return true;
  };

  if (s.length < 2) return s;

  let result = s.charAt(0);

  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end < s.length; end++) {
      const candidate = s.slice(start, end + 1);
      if (isPalindrome(candidate)) {
        if (candidate.length > result.length) {
          result = `${candidate}`;
        }
      }
    }
  }

  return result;
};
