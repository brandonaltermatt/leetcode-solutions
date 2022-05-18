/* https://leetcode.com/problems/implement-queue-using-stacks/
Implement a first in first out (FIFO) queue using only two stacks.
The implemented queue should support all the functions of a normal queue
(push, peek, pop, and empty).

Implement the MyQueue class:
    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.
Notes:
    You must use only standard operations of a stack, which means only push to top,
    peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively.
    You may simulate a stack using a list or deque (double-ended queue)
    as long as you use only a stack's standard operations.
*/

const MyQueue = () => {
  this.stack = [];
  this.reversed = [];
  this.front = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = (x) => {
  if (!this.stack.length) this.front = x;
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = () => {
  if (!this.reversed.length) {
    while (this.stack.length) {
      this.reversed.push(this.stack.pop());
    }
  }

  return this.reversed.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = () => this.reversed[this.reversed.length - 1] ?? this.front;

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = () => !this.reversed.length && !this.stack.length;

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
