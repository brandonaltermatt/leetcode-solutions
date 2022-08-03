/* https://leetcode.com/problems/validate-binary-search-tree/
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
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
// Iterate the tree using inorder traversal, return false if previous value is greater than current
// This works because inorder traversal of a BST always returns nodes in non-decreasing order
const isValidBST = function (root) {
  const stack = [];
  // The previously evaluated node should always have a smaller value than the current node
  let previous = null;

  while (root || stack.length) {
    // Traverse to the end of the leftmost branch of root
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // Return false if the previous value is greater than the current value
    if ((previous !== null) && (root.val <= previous)) return false;
    previous = root.val;
    root = root.right;
  }

  return true;
};

// Recurse through the tree using depth first search, keeping track of min and max values for nodes
const isValidBSTDfs = function (root) {
  const helper = (node, min, max) => {
    if (!node) return true;

    // Return false if this node's value is out of the bounds of the min or max it should be
    if ((node.val >= max) || (node.val <= min)) return false;

    // Check the left child's value is less than this node, and the right child's value is greater
    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
  };

  // Initialize min and max values with lowest possible and highest possible values
  return helper(root, -Infinity, Infinity);
};
