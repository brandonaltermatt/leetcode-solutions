/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
     let right = s.length-1;
     let left = 0;

     while(left<right){
         let temp = s[left];
         s[left] = s[right];
         s[right] = temp;
         left++;
         right--;
     }
};