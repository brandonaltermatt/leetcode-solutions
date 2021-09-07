/** https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
 * which causes all the following ones to be bad.
 * You are given an API bool isBadVersion(version) which returns whether version is bad. 
 * Implement a function to find the first bad version. 
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;

        while(start <= n){
            let mid = Math.floor((start+n)/2);
            let version_status = isBadVersion(mid);

            if(version_status == false){
                start = mid+1;
            } else {
                if(start == n) return mid;
                n = mid;
            }
        }
    };
};