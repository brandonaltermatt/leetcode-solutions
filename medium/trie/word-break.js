/* https://leetcode.com/problems/word-break/
Given a string s and a dictionary of strings wordDict, return true if s can be segmented
into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const wordBreak = function (s, words) {
  // Use a set for O(1) lookups for words
  const wordSet = new Set(words);
  // Use an array representing indexes of the string to mark whether a word
  // from the word set can start at an index of the string
  const canWordStartAtIndex = new Array(s.length + 1).fill(false);
  // Assume the first character of the string is the beginning of a word from the word set
  canWordStartAtIndex[0] = true;

  // Go through the string, testing every index to see if a word can end at that index.
  // If a word can end at that index, mark it as true, and use that index as a starting point
  // for future iterations, to check if another word can be concatenated from that index.
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      // Skip iteration if the index isn't a valid start of a word
      if (canWordStartAtIndex[start] === false) continue;

      // Skip iteration if word set does not contain the word sliced from the string
      const word = s.slice(start, end);
      if (!wordSet.has(word)) continue;

      // Mark that a word from the word set was found, and ends at this index
      canWordStartAtIndex[end] = true;
      break;
    }
  }

  return canWordStartAtIndex[s.length];
};
