/* https://leetcode.com/problems/lru-cache/
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists.
    Otherwise, add the key-value pair to the cache. If the number of keys exceeds the
    capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.
*/

const Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

const DLL = function () {
  this.size = 0;
  this.head = null;
  this.tail = null;
};

DLL.prototype.remove = function (node) {
  if (this.head === node) this.head = node.next;
  if (this.tail === node) this.tail = node.prev;
  if (node.prev) node.prev.next = node.next;
  if (node.next) node.next.prev = node.prev;
  this.size--;
};

DLL.prototype.push = function (node) {
  if (this.head) {
    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
  }
  if (!this.tail) this.tail = node;
  this.head = node;
  this.size++;
};

DLL.prototype.moveToTop = function (node) {
  if (this.head === node) return;
  this.remove(node);
  this.push(node);
};

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = {};
  this.dll = new DLL();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key];

  if (!node) return -1;

  this.dll.moveToTop(node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.map[key];
  if (node) {
    node.value = value;
    this.get(key);
    return;
  }

  node = new Node(key, value);

  this.map[key] = node;

  this.dll.push(node);

  if (this.dll.size > this.capacity) {
    delete this.map[this.dll.tail.key];
    this.dll.remove(this.dll.tail);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
