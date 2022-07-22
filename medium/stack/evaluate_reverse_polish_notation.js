/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const numbers = [];

  while (tokens.length) {
    const current = tokens.shift();

    if (current === '+') {
      numbers.push(numbers.pop() + numbers.pop());
    } else if (current === '-') {
      numbers.push(-numbers.pop() + numbers.pop());
    } else if (current === '*') {
      numbers.push(numbers.pop() * numbers.pop());
    } else if (current === '/') {
      numbers.push(Math.trunc((1 / numbers.pop()) * numbers.pop()));
    } else {
      numbers.push(parseInt(current, 10));
    }
  }

  return numbers[0];
};
