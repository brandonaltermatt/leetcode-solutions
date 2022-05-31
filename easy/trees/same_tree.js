/* https://leetcode.com/problems/same-tree/
Given the roots of two binary trees p and q,
write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  const queueP = [p];
  const queueQ = [q];

  while (queueP.length && queueQ.length) {
    const currP = queueP.shift();
    const currQ = queueQ.shift();

    if (!currP || !currQ) {
      if (currP !== currQ) return false;
      continue;
    }

    if (currP.val !== currQ.val) return false;

    queueP.push(currP.left, currP.right);
    queueQ.push(currQ.left, currQ.right);
  }

  if (queueP.length || queueQ.length) {
    return false;
  }

  return true;
};

/* Iterative DFS
const isSameTree = function (p, q) {
  const stack1 = [], stack2 = [];
  while (p || q || stack1.length || stack2.length) {
      while (p) {
          stack1.push(p);
          p = p.left
      }
      while (q) {
          stack2.push(q);
          q = q.left;
      }
      p = stack1.pop();
      q = stack2.pop();
      if (!p && !q) {
          continue;
      }
      if (!p || !q || p.val !== q.val) {
          return false;
      }
      stack1.push(null);
      stack2.push(null);
      p = p.right;
      q = q.right;
  }
  return true;
};
*/

/* Recursive solution
const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val
  && isSameTree(p.left, q.left)
  && isSameTree(p.right, q.right);
};
*/
