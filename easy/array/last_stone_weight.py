"""
https://leetcode.com/problems/last-stone-weight/
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones 
and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. 
The result of this smash is:
    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.
Return the smallest possible weight of the left stone. If there are no stones left, return 0.
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