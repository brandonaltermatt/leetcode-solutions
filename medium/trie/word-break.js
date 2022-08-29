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
const wordBreakDfsMemoization = function (s, wordDict) {
  const wordSet = new Set(wordDict);

  const dp = (start) => {
    if (start === s.length) return true;

    for (let i = (start + 1); i < (s.length + 1); i++) {
      const end = i;
      const word = s.slice(start, end);
      if (wordSet.has(word) && dp(end)) return true;
    }

    return false;
  };

  return dp(0);
};
