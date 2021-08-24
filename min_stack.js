/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 */

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
    this.min_stack = [];
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack[this.size] = val;

    let min = this.getMin();
    if(min === undefined || min > val){
        this.min_stack[this.size] = val;
    } else {
        this.min_stack[this.size] = min;
    }

    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.size-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.size-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */