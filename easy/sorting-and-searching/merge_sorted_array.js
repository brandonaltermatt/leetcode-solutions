/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, 
 * but instead be stored inside the array nums1.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let k=(m+n-1);
    --m;
    --n;
    
    while(m>=0 && n>=0){
        if(nums1[m]>nums2[n]){
            nums1[k--]=nums1[m--];
        }
        else{
            nums1[k--]=nums2[n--]
        }
    }
    while(m>=0){
        nums1[k--]=nums1[m--];
    }
    while(n>=0){
        nums1[k--]=nums2[n--];
    }
};