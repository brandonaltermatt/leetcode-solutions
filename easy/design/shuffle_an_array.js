/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/
 * Given an integer array nums, design an algorithm to randomly shuffle the array.
 * All permutations of the array should be equally likely as a result of the shuffling.
 */

/**
 * @param {number[]} nums
 */
const Solution = (nums) => {
  this.original_array = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = () => this.original_array;

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = () => {
  const shuffledArray = [...this.original_array];
  const arrayLength = shuffledArray.length;

  for (let i = 0; i < arrayLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }
  return shuffledArray;
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
