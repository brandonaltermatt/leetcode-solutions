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
