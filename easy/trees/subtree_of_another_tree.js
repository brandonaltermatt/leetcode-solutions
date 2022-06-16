/* https://leetcode.com/problems/subtree-of-another-tree/
Given the roots of two binary trees root and subRoot,
return true if there is a subtree of root with the same
structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of
a node in tree and all of this node's descendants.
The tree tree could also be considered as a subtree of itself.
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  const isSameTree = (root1, root2) => {
    const stack = [[root1, root2]];

    while (stack.length) {
      const [node1, node2] = stack.pop();
      if (!node1 && !node2) continue;
      if ((!node1 || !node2) || (node1.val !== node2.val)) return false;
      stack.push([node1.left, node2.left], [node1.right, node2.right]);
    }

    return true;
  };

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    if (isSameTree(node, subRoot)) return true;
    stack.push(node.right, node.left);
  }

  return false;
};

/* Recursive solution
const isSubtree = function (root, subRoot) {
  const isSameTree = (root1, root2) => {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  };

  if (!root) return !subRoot;
  return isSameTree(root, subRoot)
  || isSubtree(root.left, subRoot)
  || isSubtree(root.right, subRoot);
};
*/
