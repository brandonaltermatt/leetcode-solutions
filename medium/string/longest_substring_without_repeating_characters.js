/* https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = new Array(128).fill(0);
  let longestLength = 0;
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const currentChar = s.charCodeAt(rightIndex);
    leftIndex = Math.max(leftIndex, map[currentChar]);
    map[currentChar] = rightIndex + 1;
    longestLength = Math.max(longestLength, ((rightIndex - leftIndex) + 1));
  }

  return longestLength;
};
