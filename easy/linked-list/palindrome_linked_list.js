/* https://leetcode.com/problems/palindrome-linked-list/
Given the head of a singly linked list, return true if it is a palindrome.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let leftHead = null;
  let rightHead = null;
  let reverseNode = head;
  let skipAhead = head;

  while (skipAhead && skipAhead.next) {
    skipAhead = skipAhead.next.next;
    const tmp = reverseNode.next;
    reverseNode.next = leftHead;
    leftHead = reverseNode;
    reverseNode = tmp;
  }
  rightHead = skipAhead ? reverseNode.next : reverseNode;

  while (leftHead && rightHead) {
    if (leftHead.val !== rightHead.val) return false;
    leftHead = leftHead.next;
    rightHead = rightHead.next;
  }

  return true;
};

/* Solution using recursion
const isPalindrome = function (head) {
  let left = head;

  const traverse = (right) => {
    if (!right) return true;

    const prevIsSame = traverse(right.next);
    const currIsSame = right.val === left.val;

    left = left.next;
    return prevIsSame && currIsSame;
  };
  return traverse(head);
};
*/

/* Solution using a string
const isPalindrome = function (head) {
  let current = '';
  let reverse = '';

  while (head) {
      current += head.val;
      reverse = head.val + reverse;
      head = head.next;
  }

  return current === reverse;
};
*/
