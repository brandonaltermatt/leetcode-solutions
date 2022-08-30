/* https://leetcode.com/problems/word-break/
Given a string s and a dictionary of strings wordDict, return true if s can be segmented
into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Array(s.length + 1).fill(false);
  memo[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (memo[start] === false) continue;

      const word = s.slice(start, end);
      if (!wordSet.has(word)) continue;

      memo[end] = true;
      break;
    }
  }

  return memo[s.length];
};
