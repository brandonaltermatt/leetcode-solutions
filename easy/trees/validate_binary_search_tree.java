/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
*/

// Definition for a binary tree node.
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution{
    public boolean isValidBST(TreeNode root){
        return isValid(root, null, null);
    }

    public boolean isValid(TreeNode root, Integer min, Integer max){
        if(root == null) return true;

        if((min != null) && (root.val <= min)) return false;
        if((max != null) && (root.val >= max)) return false;

        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }
}