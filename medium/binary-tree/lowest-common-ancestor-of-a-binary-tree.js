/* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
between two nodes p and q as the lowest node in T that has both p and q as descendants
(where we allow a node to be a descendant of itself).”
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestorOptimized = function (root, p, q) {
  if (!root || (root === p) || (root === q)) return root;

  const left = lowestCommonAncestorOptimized(root.left, p, q);
  const right = lowestCommonAncestorOptimized(root.right, p, q);

  return (left && right) ? root : left || right;
};
