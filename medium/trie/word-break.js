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
const wordBreak1 = function (s, words) {
  // Use a set for O(1) lookups for words
  const wordSet = new Set(words);
  // Use an array representing indexes of the string to mark whether a word
  // from the word set can start at an index of the string
  const starts = new Array(s.length + 1).fill(false);
  // Assume the first character of the string is the beginning of a word from the word set
  starts[0] = true;

  // Go through the string, testing every index to see if a word can end at that index.
  // If a word can end at that index, mark it as true, and use that index as a starting point
  // for future iterations, to check if another word can be concatenated from that index.
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      // Skip iteration if the index isn't a valid start of a word
      if (starts[start] === false) continue;

      // Skip iteration if word set does not contain the word sliced from the string
      const word = s.slice(start, end);
      if (!wordSet.has(word)) continue;

      // Mark that a word from the word set was found, and ends at this index
      starts[end] = true;
      break;
    }
  }

  return starts[s.length];
};

const wordBreak2 = function (s, wordArray) {
  const words = new Set(wordArray);
  const wordLengths = new Set(wordArray.map((word) => word.length));
  // Use a set to save the indexes of the string that can be used as the start of words.
  const starts = new Set([0]);

  // For every index that can be the start of a word, check whether any substring
  // with the length of a word from the word set is a valid word.
  // If so, add the end index of the substring to the list of start indexes.
  starts.forEach((start) => {
    wordLengths.forEach((length) => {
      if (words.has(s.slice(start, start + length))) {
        starts.add(start + length);
      }
    });
  });

  return starts.has(s.length);
};
