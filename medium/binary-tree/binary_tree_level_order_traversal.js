/* https://leetcode.com/problems/binary-tree-level-order-traversal/
Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    const queueLength = queue.length;
    const currLevel = [];
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      currLevel.push(current.val);
    }
    result.push(currLevel);
  }

  return result;
};

/*
const levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const dfs = (node, level) => {
    result[level] = [...(result[level] || []), node.val];
    node.left && dfs(node.left, level + 1);
    node.right && dfs(node.right, level + 1);
  };
  dfs(root, 0);

  return result;
};
*/
