// Given a binary tree, return the preorder traversal of its nodes' values.

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
var preorderTraversal = function(root) {
    var number = [];
    var stack = [];
    
    if(root == null ) return number;

    stack.push(root);
    while(stack.length > 0){
        var node = stack.pop();
        number.push(node.val);
        
        if(node.right != null){
            stack.push(node.right);
        }
        if(node.left != null){
            stack.push(node.left);
        }
    }
    return number;
};