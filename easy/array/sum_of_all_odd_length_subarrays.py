"""
Find all subarrays.
    For array of size x, start with x subarrays
    If array.length>2, new array.length-3 subarrays of size 3
    If array.length>4, new array.length-4 subarrays of size 5

    For all odd n-length subarrays, create m new subarrays
    where m is equal to the array length-n.
Add the subarrays.
Add the sums.
"""
from typing import List

class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        table = arr.copy()

        for n in range(3,len(arr),2):
            for m in range(len(arr)-n):
                table.append(sum(arr[m:m+n]))

        return sum(table)