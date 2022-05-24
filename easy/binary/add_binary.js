/* https://leetcode.com/problems/add-binary/
Given two binary strings a and b, return their sum as a binary string.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let result = '';
  let carry = 0;

  while (a || b || carry) {
    const sum = +a.slice(-1) + +b.slice(-1) + carry;

    if (sum > 1) {
      result = (sum % 2) + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
};

/* Initial solution
const addBinary = function (a, b) {
  let result = '';
  let carry = 0;
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  while ((aIndex >= 0) || (bIndex >= 0)) {
    const aCurrent = (aIndex >= 0 && a[aIndex] === '1') ? 1 : 0;
    const bCurrent = (bIndex >= 0 && b[bIndex] === '1') ? 1 : 0;

    const sum = aCurrent + bCurrent + carry;
    carry = sum > 1 ? 1 : 0;
    const cCurrent = sum % 2;

    result = cCurrent.toString().concat(result);
    aIndex--;
    bIndex--;
  }

  if (carry > 0) {
    result = carry.toString().concat(result);
  }

  return result;
};
*/
