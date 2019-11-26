// Given a binary tree, return the postorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var stack = [];
    var res = [];
    
    if(root == null) return res;
    
    stack.push(root)
    while(stack.length > 0){
        var node = stack.pop();
        res.unshift(node.val)
        if(node.left != null){
            stack.push(node.left)
        }
        if (node.right != null){
            stack.push(node.right)
        }
    }
    return res;
};