// Description

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.



// Solution

const searchInsert = function(nums, target) {
    let result = 0;
    
    if (target < nums[0]) {
        return result;
    };
    
    for (i = 0; i < nums.length; i++) {
        console.log(result);
        if (nums[i] === target) {
            return i;
        }  else if (nums[i] < target) {
            result = i;  
        };
    };
    
    return result + 1;
};