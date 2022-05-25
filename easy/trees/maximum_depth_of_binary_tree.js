/* https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes
along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const { length } = queue;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    depth++;
  }

  return depth;
};

/* Recursive solution
const maxDepth = function (root) {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
*/
