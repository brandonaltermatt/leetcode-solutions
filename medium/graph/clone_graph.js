/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* https://leetcode.com/problems/clone-graph/
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a unique value (int) and a list (List[Node]) of its neighbors.
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  if (!node) return;

  const queue = [node];
  const map = new Map();
  map.set(node, new Node(node.val));

  while (queue.length) {
    const current = queue.shift();

    current.neighbors.forEach((neighbor) => {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      map.get(current).neighbors.push(map.get(neighbor));
    });
  }

  return map.get(node);
};

/*
const cloneGraph = function (node) {
  const map = {};

  const dfs = (head) => {
    if (!head) return head;
    if (!map[head.val]) {
      map[head.val] = new Node(head.val);
      map[head.val].neighbors = head.neighbors.map(dfs);
    }

    return map[head.val];
  };

  return dfs(node);
};

*/
