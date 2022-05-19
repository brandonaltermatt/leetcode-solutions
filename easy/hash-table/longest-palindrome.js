/* https://leetcode.com/problems/longest-palindrome/
Given a string s which consists of lowercase or uppercase letters,
return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const frequency = new Array(128).fill(0);
  let palindromeLength = 0;

  for (let i = 0; i < s.length; i += 1) {
    const charCode = s.charCodeAt(i);

    if (frequency[charCode]) {
      palindromeLength += 2;
      frequency[charCode] = 0;
    } else {
      frequency[charCode] = 1;
    }
  }

  return palindromeLength + (palindromeLength === s.length ? 0 : 1);
};

/* First solution
const longestPalindrome = function (s) {
  const map = {};
  let palindromeLength = 0;

  [...s].forEach((letter) => {
    const letterCount = map[letter];
    if (!letterCount) {
      map[letter] = 1;
    } else if (letterCount > 0) {
      map[letter] = 0;
      palindromeLength += 2;
    } else {
      map[letter] = 1;
    }
  });

  return palindromeLength + (Object.values(map).some((count) => count > 0) ? 1 : 0);
};
*/
