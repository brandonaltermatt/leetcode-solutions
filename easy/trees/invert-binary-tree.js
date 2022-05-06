/* https://leetcode.com/problems/invert-binary-tree/
Given the root of a binary tree, invert the tree, and return its root.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root !== null) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};

/* Depth-First Search
var invertTree = function(root) {
  if (!root) return null;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    [node.left, node.right] = [node.right, node.left];

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
};
*/

/* Breadth-First Search
var invertTree = function(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    [node.left, node.right] = [node.right, node.left];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
*/

/* Recursive solution
var invertTree = function(root) {
  if (!root) return;

  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
};
*/