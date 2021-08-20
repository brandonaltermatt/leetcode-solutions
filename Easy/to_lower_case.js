/**
 * https://leetcode.com/problems/to-lower-case/
 * Replace every upper case character with the same lower case character.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    
    return Array
        .from(str)
        .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        .join('');
};