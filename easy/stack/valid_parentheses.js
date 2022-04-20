/* https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const stack = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i += 1) {
    const currentChar = s[i];
    if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
      stack.push(currentChar);
    } else if (legend[stack.pop()] !== currentChar) {
      return false;
    }
  }

  return stack.length === 0;
};

/** Optimized solution
   for (let c of s) {
    const currentChar = legend[c];
    if (legend[c]) {
      stack.push(legend[c]);
    } else {
      if (c !== stack.pop()) return false;
    }
  }
*/