// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    var numbers = [];
    var i = 0;
    while(i < nums.length){
        if(!(numbers[nums[i]] == null || nums.length == 1)){
            return false;
        }
        i++;
    }
    return true;
};