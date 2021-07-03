"""
Given an array A of non-negative integers,
return an array consisting of all the even elements of A,
followed by all the odd elements of A.
You may return any answer array that satisfies this condition.
"""
from typing import List

class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        res=[A[0]]
        for x in range(1,len(A)):
            if A[x]%2==0: res.insert(0,A[x])
            else: res.append(A[x])
        return res