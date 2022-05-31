/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let hamWeight = 0;

  while (n) {
    hamWeight += n & 1;
    n >>>= 1;
  }

  return hamWeight;
};

/* Using string matching
const hammingWeight = function (n) {
  n = n.toString(2);
  return n.match(/1/g)?.length ?? 0;
};
*/

/* Using string matching
const hammingWeight = function (n) {
  return number.toString(2).replaceAll("0", "").length;
};
*/
