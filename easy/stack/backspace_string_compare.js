/* https://leetcode.com/problems/backspace-string-compare/
Given two strings s and t, return true if they are equal
when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  // Start at the end and work backwards comparing characters side by side
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;

  // If the current char is a '#', decrement the pointer until the next non-backspace char
  const skipLetters = (index, str) => {
    if (str[index] === '#') {
      let skipCount = 2;
      while (skipCount > 0) {
        index--;
        skipCount--;
        if (str[index] === '#') skipCount += 2;
      }
    }
    return index;
  };

  // Compare chars until a mismatch is found, or until the beginning of the strings is reached
  while (sIndex >= 0 || tIndex >= 0) {
    sIndex = skipLetters(sIndex, s);
    tIndex = skipLetters(tIndex, t);
    if (s[sIndex] !== t[tIndex]) return false;

    sIndex--;
    tIndex--;
  }

  return true;
};

/* Slightly less efficient runtime and space, but more succinct
const backspaceCompare = function (s, t) {
  const processString = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const current = str.charAt(i);
      current === '#' ? stack.pop() : stack.push(current);
    }

    return stack.join('');
  };

  return processString(s) === processString(t);
};
*/
