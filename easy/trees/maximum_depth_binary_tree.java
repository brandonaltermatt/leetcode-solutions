/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
Given an integer n, find the sum of the digits for every number from 1 to n.
Count the frequency of each sum. Return a count of the sums with the greatest frequency.
*/
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

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

// Iterative breadth-first search solution
// Iterate through every node on a level, then increase the count by 1
class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;

        Queue<TreeNode> node_queue = new LinkedList<>();
        int height;

        node_queue.offer(root);
        height = 0;

        while(!node_queue.isEmpty()){
            int size = node_queue.size();
            while(size-- > 0){
                TreeNode current_node = node_queue.poll();
                if(current_node.left  != null){
                    node_queue.offer(current_node.left);
                }
                if(current_node.right != null){
                    node_queue.offer(current_node.right);
                }
            }
            height++;
        }

        return height;
    }
}

/*
// Iterative post-order depth-first search solution
// This essentially simulates the program stack of the resursive solution,
// however we implement our own version of the stack using a data structure.
class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;

        Stack<TreeNode> node_stack = new Stack<>();
        Stack<Integer> value_stack = new Stack<>();
        int max_value;

        node_stack.push(root);
        value_stack.push(1);
        max_value = 0;

        while(!node_stack.isEmpty()){
            TreeNode current_node = node_stack.pop();
            int current_value = value_stack.pop();
            max_value = Math.max(current_value, max_value);

            if(current_node.right != null){
                node_stack.push(current_node.right);
                value_stack.push(current_value + 1);
            }
            if(current_node.left != null){
                node_stack.push(current_node.left);
                value_stack.push(current_value + 1);
            }
        }

        return max_value;
    }
}
*/

/* Recursive post-order depth-first search solution
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        int left_depth = maxDepth(root.left);
        int right_depth = maxDepth(root.right);
        
        if(left_depth > right_depth){
            return left_depth + 1;
        } else {
            return right_depth + 1;
        }
    }
}
*/