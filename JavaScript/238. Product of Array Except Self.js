// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    var output = [];
    var left = [];
    var right = [];
    
    var i = 0;
    while(i<nums.length){
        if(i == 0){
            output[i] = 1;
        } else {
            output[i] = output[i-1]*nums[i-1];
        }
        i++;
    }
    
    i = nums.length-1;
    var r = 1;
    while(i>-1){
        if(i == nums.length-1){
            //right[i] = 1;
        } else {
            r *= nums[i+1];
            output[i] = output[i]*r;
        }
    i--;
    }
    return output;
};