/* https://leetcode.com/problems/reverse-linked-list/
Given the head of a singly linked list, reverse the list, and return the reversed list.
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
 * @return {ListNode}
 */
const reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

/*
const reverseList = function (head) {
  let prev = null;
  while (head) {
    const { next } = head;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
*/

/* Recursive solution
const reverseList = function (head) {
  if (!head || !head.next) return head;

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return newHead;
};
*/
