// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var lastIndex = nums.length;
    var a = 0;
    var b = lastIndex;
    var result = [];
    while (a != b){
        while(a != b){
            if((nums[a]+nums[b]) == target){
                result[0] = a;
                result[1] = b;
                return result; 
            } 
          b--;  
        }
        a++;
        b = lastIndex;
    }
    
};