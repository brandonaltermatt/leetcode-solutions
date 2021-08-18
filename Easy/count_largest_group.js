/**
 * https://leetcode.com/problems/count-largest-group/
 * Given an integer n, find the sum of the digits for every number from 1 to n.
 * Count the frequency of each sum. Return a count of the sums with the greatest frequency.
**/

/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    var digit_sum_frequencies = [0];
    let greatest_sum_frequency = 0;
    let greatest_sum = 0;

    for(let i=1; i<=n; i++){
        sum_of_digits = sumOfNumberDigits(i);

        if(digit_sum_frequencies[sum_of_digits] == undefined){
            digit_sum_frequencies[sum_of_digits] = 0;
        }
        digit_sum_frequencies[sum_of_digits]++;
    }

    greatest_sum = Math.max.apply(null, digit_sum_frequencies);

    greatest_sum_frequency = digit_sum_frequencies.reduce(function(accumulator, currentValue) {
        return accumulator + (currentValue === greatest_sum);
    }, 0);
    
    return greatest_sum_frequency;
};

/**
 * @param {number} number
 * @return {number}
 */
 var sumOfNumberDigits = function (number){
    let sum_of_digits = 0;

    while (number > 0) {
        sum_of_digits += (number % 10);
        number = Math.floor(number / 10);
    }

    return sum_of_digits;
};

/** Solution using string manipulation:
var sumOfNumberDigits = function (num){
    let number_string = num.toString();
    let char_array = number_string.split('');
    let number_array = char_array.map(Number);
    let number_array_sum = number_array.reduce(function (a,b) {
        return a+b;
    }, 0);

    return number_array_sum;
};
*/

/** Solution using Map:
var countLargestGroup = function(n) {
    let digit_sum_frequencies = new Map();
    let greatest_sum = 0;
    let greatest_sum_frequency = 0;

    for(let i=1; i<=n; i++){
        let sum_of_digits = sumOfNumberDigits(i);

        digit_sum_frequencies.set(sum_of_digits, digit_sum_frequencies.get(sum_of_digits)+1 || 1);
    }

    greatest_sum = Math.max(...digit_sum_frequencies.values());
    greatest_sum_frequency = Array.from(digit_sum_frequencies.values()).reduce(function(accumulator, currentValue) {
        return accumulator + (currentValue === greatest_sum);
    }, 0);

    return greatest_sum_frequency;
};
 */