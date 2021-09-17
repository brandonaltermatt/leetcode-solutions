/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

// One pass solution
// Skip fast pointer ahead of slow pointer by n nodes
// Move both pointers forward until the fast pointer is at the end node
// Now the slow pointer is n nodes away from the fast pointer (at the end node)
// Delete the node the slow pointer is pointing to
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast, slow, dummy;
        dummy = new ListNode(0, head);
        fast = dummy;
        slow = dummy;

        for (int i = 0; i < n+1; i++) {
            fast = fast.next;
        }

        while(fast != null){
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}