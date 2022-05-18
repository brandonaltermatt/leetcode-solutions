/* https://leetcode.com/problems/ransom-note/
Given two strings ransomNote and magazine,
return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  magazine = [...magazine];

  return [...ransomNote].every((letter) => {
    const index = magazine.indexOf(letter);

    if (index < 0) {
      return false;
    }
    magazine[index] = null;

    return true;
  });
};

/* First solution
const canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i += 1) {
    const currentChar = magazine.charCodeAt(i) - 97;
    magazineMap[currentChar] += 1;
  }
  for (let i = 0; i < ransomNote.length; i += 1) {
    const currentChar = ransomNote.charCodeAt(i) - 97;
    magazineMap[currentChar] -= 1;
    if (magazineMap[currentChar] < 0) return false;
  }

  return true;
};
*/
