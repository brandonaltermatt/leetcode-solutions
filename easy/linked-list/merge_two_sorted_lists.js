/* https://leetcode.com/problems/merge-two-sorted-lists/
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by 
splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    let resultHead = new ListNode();
    let resultCurrent = resultHead;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        resultCurrent.next = list1;
        list1 = list1.next;
      } else {
        resultCurrent.next = list2;
        list2 = list2.next;
      }
      resultCurrent = resultCurrent.next;
    }
    resultCurrent.next = list1 || list2;

    return resultHead.next;
};