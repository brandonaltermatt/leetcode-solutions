/* https://leetcode.com/problems/min-stack/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
*/

const MinStack = function () {
  this.elements = [];
};

/**
 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: !this.elements.length ? x : Math.min(x, this.getMin()),
  });
};

/**
 @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop();
};

/**
 @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};

/**
 @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
