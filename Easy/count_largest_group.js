/**
 * https://leetcode.com/problems/count-largest-group/
 * Given an integer n, find the sum of the digits for every number from 1 to n.
 * Count the frequency of each sum. Return the sum with the greatest frequency.
**/

/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    var digit_sum_groups = [0];
    let biggest_group_count = 0;
    let max_sum = 0;

    for(let i=1; i<=n; i++){
        number_array_sum = sumOfNumberDigits(i);

        if(!digit_sum_groups[number_array_sum]){
            digit_sum_groups[number_array_sum] = 0;
        }
        digit_sum_groups[number_array_sum]++;
    }

    max_sum = Math.max.apply(null, digit_sum_groups);

    biggest_group_count = digit_sum_groups.reduce(function(accumulator, currentValue) {
        return accumulator + (currentValue === max_sum);
    }, 0);
    
    return biggest_group_count;
};

/**
 * @param {number} num
 * @return {number}
 */
var sumOfNumberDigits = function (num){
    let number_string = num.toString();
    let char_array = number_string.split('');
    let number_array = char_array.map(Number);
    let number_array_sum = number_array.reduce(function (a,b) {
        return a+b;
    }, 0);

    return number_array_sum;
};

console.log(countLargestGroup(11));