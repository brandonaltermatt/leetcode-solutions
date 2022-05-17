/* https://leetcode.com/problems/linked-list-cycle/
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be
 reached again by continuously following the next pointer.
 Internally, pos is used to denote the index of the node that tail's next pointer
 is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};

/* Destructive, but O(n) time and O(1) space
const hasCycle = (head) => {
  while (head) {
    if (!head.val) return true;

    head.val = null;
    head = head.next;
  }

  return false;
};
*/
