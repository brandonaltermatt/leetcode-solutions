/* https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
It is guaranteed that the given RPN expression is always valid.
That means the expression would always evaluate to a result,
and there will not be any division by zero operation.
*/

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
