// Given an array of integers nums, write a method that returns the "pivot" index of this array.

// We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length < 3) return -1;
    var leftSumArr =[];
    var rightSumArr = [];
    var i = 0;
    
    while(i < nums.length){
        if(i == 0) {
            leftSumArr[i] = 0;
        } else if(i == 1) {
            leftSumArr[i] = nums[i - 1];
        } else {
            leftSumArr[i] = leftSumArr[i - 1] + nums[i - 1];
        }
        i++;
    }
    
    i = nums.length - 1;
    while(i > -1){
        if(i == nums.length - 1){
            rightSumArr[i] = 0;
        } else if(i == nums.length - 2){
            rightSumArr[i] = nums[i + 1];
        } else {
            rightSumArr[i] = rightSumArr[i + 1] + nums[i + 1];
        }
           
        i--;
    }
    
    i = 0;
    while(i < nums.length){
        if(rightSumArr[i] == leftSumArr[i]) return i;
        i++;
    }
    
    return -1;
};