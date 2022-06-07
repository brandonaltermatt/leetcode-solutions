/* https://leetcode.com/problems/symmetric-tree/
Given the root of a binary tree, check whether
it is a mirror of itself (i.e., symmetric around its center).
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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (s, t) => {
    if (!s && !t) return true;

    if ((!s || !t) || (s.val !== t.val)) return false;

    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  };

  return isMirror(root.left, root.right);
};
