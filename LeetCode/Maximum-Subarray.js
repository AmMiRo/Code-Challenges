// Description

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



// Solution

const maxSubArray = function(nums) {
    let test = nums[0];
    let result = nums[0];
    
    for (i = 1; i < nums.length; i++) {
        test = Math.max(nums[i], test + nums[i]);
        
        if (test > result) {
            result = test;
        };
    };
    
    return result;
};