// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var node = head;
    var lastHead = null;
    
    while(node != null){
        var temp = node.next;
        node.next = lastHead;
        lastHead = node;
        node = temp;
    }
    
    return lastHead;
};