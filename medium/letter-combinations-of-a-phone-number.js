/* https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const digitToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const combinations = [];

  const backtrack = (combination, index) => {
    if (index === digits.length) {
      combinations.push(combination);
      return;
    }

    digitToLetters[digits[index]].forEach((letter) => {
      backtrack(combination + letter, index + 1);
    });
  };
  backtrack('', 0);

  return combinations;
};
