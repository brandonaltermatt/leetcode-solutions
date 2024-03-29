/* https://leetcode.com/problems/binary-tree-right-side-view/
Given the root of a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.
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
 * @return {number[]}
 */
const rightSideViewBfs = function (root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i === size - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

const rightSideViewDfs = function (root) {
  const result = [];

  const preOrderTraversal = (node, height) => {
    if (!node) return;

    result[height] = node.val;

    preOrderTraversal(node.left, height + 1);
    preOrderTraversal(node.right, height + 1);
  };

  preOrderTraversal(root, 0);

  return result;
};
