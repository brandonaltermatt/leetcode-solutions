"""
We have a collection of stones, each stone has a positive integer weight.
Each turn, we choose the two heaviest stones and smash them together.
Suppose the stones have weights x and y with x <= y. 
The result of this smash is:
    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed,
    and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.
Return the weight of this stone 
(or 0 if there are no stones left.)
"""
from typing import List
import heapq

"""
Make all the values negative
so we can use heapq.pop() to give us the smallest each time
"""
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones=[-val for val in stones]
        heapq.heapify(stones)
        while len(stones)>1 and stones[0]!=0:
            heapq.heappush(stones, heapq.heappop(stones)-heapq.heappop(stones))
        return -stones[0]