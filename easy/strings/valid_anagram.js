/* https://leetcode.com/problems/valid-anagram/
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  const S = new Array(26).fill(0);
  const T = new Array(26).fill(0);
  
  for(let i = 0; i != s.length; ++i)
  {
      const ch_s = s.charCodeAt(i) - 97;
      const ch_t = t.charCodeAt(i) - 97;
      
      S[ch_s] = 1+S[ch_s];
      T[ch_t] = 1+T[ch_t];
  }
  
  const matches = S.map((_,index)=> T[index] === S[index]);
  const areEqual = matches.every(value=>value);
  
  return areEqual;
};

/* Solution using a map.
var isAnagram = function(s, t) {
  const charMap = {};

  [...s].forEach((char) => charMap[char] = charMap[char] === undefined ? 1 : charMap[char] += 1);
  [...t].forEach((char) => charMap[char] = charMap[char] === undefined ? -1 : charMap[char] -= 1);
  
  return Object.values(charMap).every((mapValue) => mapValue === 0);
};
*/