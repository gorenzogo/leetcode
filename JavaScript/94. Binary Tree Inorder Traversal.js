// Given a binary tree, return the inorder traversal of its nodes' values.

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
var inorderTraversal = function(root) {
    var stack = [];
    var number = [];
    
    var  node = root;
    while(node != null || stack.length > 0){
        while(node != null){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()
        number.push(node.val);
        node = node.right;
        
    }
    return number;
};