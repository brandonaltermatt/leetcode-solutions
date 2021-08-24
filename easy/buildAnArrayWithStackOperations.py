"""
Given an array target and an integer n.
In each iteration, you will read a number from  list = {1,2,3..., n}.
Build the target array using the following operations:
    Push: Read a new element from the beginning list, and push it in the array.
    Pop: delete the last element of the array.
    If the target array is already built, stop reading more elements.
Return the operations to build the target array.
You are guaranteed that the answer is unique.
"""
from typing import List

class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        res=[]
        # Indexing a list by -1 in Python returns the last element
        for i in range(1, target[-1]+1):
            res.append("Push")
            if i not in target:
                res.append("Pop")
        return res