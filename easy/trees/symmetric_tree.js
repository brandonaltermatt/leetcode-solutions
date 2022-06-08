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

  const isMirror = (p, q) => {
    const stackP = [p];
    const stackQ = [q];

    while (stackP.length || stackQ.length) {
      const currentP = stackP.pop();
      const currentQ = stackQ.pop();

      if (!currentP && !currentQ) continue;

      if ((!currentP || !currentQ) || (currentP.val !== currentQ.val)) return false;

      stackP.push(currentP.left);
      stackP.push(currentP.right);
      stackQ.push(currentQ.right);
      stackQ.push(currentQ.left);
    }

    return true;
  };

  return isMirror(root.left, root.right);
};

/* Using queues, BFS
const isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (p, q) => {
    const queueP = [p];
    const queueQ = [q];

    while (queueP.length || queueQ.length) {
      const currentP = queueP.shift();
      const currentQ = queueQ.shift();

      if (!currentP && !currentQ) continue;

      if ((!currentP || !currentQ) || (currentP.val !== currentQ.val)) return false;

      queueP.push(currentP.left);
      queueP.push(currentP.right);
      queueQ.push(currentQ.right);
      queueQ.push(currentQ.left);
    }

    return true;
  };

  return isMirror(root.left, root.right);
};
*/

/* Solution using recursion
const isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (s, t) => {
    if (!s && !t) return true;

    if ((!s || !t) || (s.val !== t.val)) return false;

    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  };

  return isMirror(root.left, root.right);
};
*/
