"""
https://leetcode.com/problems/palindrome-linked-list/
Given a singly linked list, determine if it is a palindrome.
"""

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        vals=[]
        while head:
            vals.append(head.val)
            head=head.next
        # [::-1] uses slicing to reverse the array
        return vals == vals[::-1]