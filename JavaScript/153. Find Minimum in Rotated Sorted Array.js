// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

/** 1) Brute force */
// Time O(n)
// Space O(1)
var findMin = function(nums) {
    var i = 0;
    if(nums.length == 1) return nums[0];
    if(nums[0] < nums[nums.length - 1]) return nums[0]; 
    while(i < nums.length - 1){
        if(nums[i] > nums[i + 1]){
            return nums[i + 1];
        }
        i++;
    }
    return null;
};