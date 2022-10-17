/* https://leetcode.com/problems/find-all-anagrams-in-a-string/
Given two strings s and p, return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Use a sliding window with a hash map to find anagrams. O(2N) => O(N)
const findAnagramsSlidingWindow = function (s, p) {
  const hashP = new Array(26).fill(0);

  // For every p[i], increment map[p[i]] to indicate which letters are anagram candidates
  for (let i = 0; i < p.length; i++) {
    hashP[p.charCodeAt(i) - 97]++;
  }

  const anagramStarts = [];
  let windowStart = 0;

  // For every s[i], decrement map[s[i]] to indicate which letters have been seen
  for (let i = 0; i < s.length; i++) {
    const char1 = s.charCodeAt(i) - 97;
    hashP[char1]--;
    // If s[i] is a letter not in p, move the window start to i, resetting the map along the way
    while (hashP[char1] < 0) {
      const char2 = s.charCodeAt(windowStart) - 97;
      windowStart++;
      hashP[char2]++;
    }
    if ((i - windowStart) + 1 === p.length) anagramStarts.push(windowStart);
  }

  return anagramStarts;
};

// Check all substrings of length p in s to find anagrams. O(N*M)
const findAnagramsBruteForce = function (s, p) {
  const isAnagram = (stringA, stringB) => {
    const hashA = new Array(26).fill(0);
    const hashB = new Array(26).fill(0);

    for (let i = 0; i !== stringA.length; ++i) {
      const charA = stringA.charCodeAt(i) - 97;
      const charB = stringB.charCodeAt(i) - 97;

      hashA[charA]++;
      hashB[charB]++;
    }

    let i = hashA.length;
    while (i--) {
      if (hashA[i] !== hashB[i]) return false;
    }

    return true;
  };

  const anagramStarts = [];

  for (let i = 0; i <= s.length - p.length; i++) {
    if (isAnagram(s.slice(i, i + p.length), p)) {
      anagramStarts.push(i);
    }
  }

  return anagramStarts;
};
