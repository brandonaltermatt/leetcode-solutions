/**
 * https://leetcode.com/problems/count-largest-group/
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    let biggest_sum = 0;
    let sum_of_digits = 0;

    for(let i=0; i<n; i++){
        let number_string = i.toString();
        
        for (let j=0; j < number_string.length; j++){
            sum_of_digits += parseInt(number_string[j])
            console.log(`${i}\t${parseInt(number_string[j])}`)
        }
        
        if (sum_of_digits > biggest_sum){
            biggest_sum = sum_of_digits;
        }

        sum_of_digits = 0;
    }

    return biggest_sum;
};

countLargestGroup(13)