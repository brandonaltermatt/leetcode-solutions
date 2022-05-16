/* https://leetcode.com/problems/balanced-binary-tree/
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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
var isBalanced = function(root) {
  let result = true;

  const depthFirstSearch = function(node) {
    if (node === null) return 0;
  
    const left = depthFirstSearch(node.left);
    const right = depthFirstSearch(node.right);

    if (Math.abs(left - right) > 1) result = false;
    return Math.max(left, right) + 1;
  };

  depthFirstSearch(root);

  return result;
};

/* First solution
var isBalanced = function(root) {
  function getHeight(node) {
      if (node === null) return 0;
      return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
  
  if (root === null) return true;
  return Math.abs( getHeight(root.left) - getHeight(root.right) ) < 2 && 
    isBalanced(root.left) && isBalanced(root.right);
};
*/