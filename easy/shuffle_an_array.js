/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/
 * Given an integer array nums, design an algorithm to randomly shuffle the array.
 * All permutations of the array should be equally likely as a result of the shuffling.
 */

/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.original_array = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original_array;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const array_to_shuffle = [...this.original_array];
    const array_length = array_to_shuffle.length;

    for(let i=0; i < array_length; i++){
        const random_index = Math.floor(Math.random() * array_length);
        [array_to_shuffle[i], array_to_shuffle[random_index]] = [array_to_shuffle[random_index], array_to_shuffle[i]];
    }
    return array_to_shuffle;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

/** Solution using a forEach function
 * Solution.prototype.shuffle = function() {
 *  const len = this.array_to_shuffle.length;
 *  this.array_to_shuffle.forEach(function swapWithRandomElement(element, index, array){
 *      const random_index = Math.floor(Math.random() * len);
 *      [array[index], array[random_index]] = [array[random_index], array[index]];
 *  });
 *  return this.array_to_shuffle;
 *  };
 */